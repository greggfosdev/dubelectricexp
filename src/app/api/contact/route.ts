import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Check honeypot field - if filled, likely spam
    if (body.company) {
      console.log('🍯 Honeypot triggered - potential spam blocked')
      // Return success to not tip off bots
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Build email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #00FF99; color: #0B0B0D; padding: 20px; text-align: center; }
            .content { background-color: #f4f4f4; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Inquiry</h1>
              <p>Dub Electric Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${body.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${body.phone}</div>
              </div>
              ` : ''}
              ${body.eventDate ? `
              <div class="field">
                <div class="label">Event Date:</div>
                <div class="value">${body.eventDate}</div>
              </div>
              ` : ''}
              ${body.cityVenue ? `
              <div class="field">
                <div class="label">City/Venue:</div>
                <div class="value">${body.cityVenue}</div>
              </div>
              ` : ''}
              ${body.budgetRange ? `
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${body.budgetRange}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted through dubelectricexp.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email (currently only to dubelectricexp@gmail.com due to Resend free tier)
    // To send to multiple addresses, verify your domain at resend.com/domains
    const result = await resend.emails.send({
      from: 'Dub Electric <onboarding@resend.dev>',
      to: 'dubelectricexp@gmail.com',
      replyTo: email,
      subject: `New Booking Inquiry from ${name}`,
      html: emailHtml,
    })

    console.log('✅ Email sent successfully:', result)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
