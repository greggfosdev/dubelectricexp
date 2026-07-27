import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { InquiryType } from '@/types/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

const INQUIRY_LABELS: Record<InquiryType, string> = {
  dj: 'DJ Booking Request',
  production: 'Production & Rental Request',
  general: 'General Inquiry',
}

// Server-side required fields per type. Phone is deliberately NOT required here
// even though the client requires it for bookings; the server stays a lenient
// superset so a degraded client is never rejected over a soft field.
const REQUIRED: Record<InquiryType, ReadonlyArray<string>> = {
  dj: ['name', 'email', 'eventDate', 'eventType'],
  production: ['name', 'email', 'eventDate', 'eventType'],
  general: ['name', 'email', 'message'],
}

const BUDGET_LABELS: Record<string, string> = {
  'under-500': 'Under $500',
  '500-1000': '$500 - $1,000',
  'under-1000': 'Under $1,000',
  '1000-2500': '$1,000 - $2,500',
  '2500-5000': '$2,500 - $5,000',
  '5000-10000': '$5,000 - $10,000',
  '5000-plus': '$5,000+',
  '10000-plus': '$10,000+',
}

const asString = (value: unknown, max = 1000): string =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === 'string')
        .map((item) => item.trim().slice(0, 100))
        .slice(0, 20)
    : []

const escapeHtml = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!
  )

// Escape FIRST, then convert newlines
const multiline = (value: string): string => escapeHtml(value).replace(/\n/g, '<br>')

// Guard against email header injection
const sanitizeSubject = (value: string): string => value.replace(/[\r\n]+/g, ' ').slice(0, 180)

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>
    try {
      const parsed: unknown = await request.json()
      if (typeof parsed !== 'object' || parsed === null) throw new Error('not an object')
      body = parsed as Record<string, unknown>
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // Check honeypot field - if filled, likely spam
    if (body.company) {
      console.log('🍯 Honeypot triggered - potential spam blocked')
      // Return success to not tip off bots
      return NextResponse.json({ success: true })
    }

    // Unknown/missing inquiryType falls back to 'general', whose required set
    // matches the legacy form contract (name, email, message).
    const inquiryType: InquiryType =
      body.inquiryType === 'dj' || body.inquiryType === 'production' ? body.inquiryType : 'general'

    const fields = {
      name: asString(body.name, 200),
      email: asString(body.email, 320),
      phone: asString(body.phone, 50),
      eventDate: asString(body.eventDate, 200),
      eventType: asString(body.eventType, 100),
      cityVenue: asString(body.cityVenue, 300),
      guestCount: asString(body.guestCount, 50),
      attendance: asString(body.attendance, 50),
      indoorOutdoor: asString(body.indoorOutdoor, 50),
      musicVibe: asString(body.musicVibe, 300),
      venuePower: asString(body.venuePower, 50),
      setupNotes: asString(body.setupNotes, 2000),
      budgetRange: asString(body.budgetRange, 50),
      topic: asString(body.topic, 100),
      message: asString(body.message, 5000),
    }
    const addOns = asStringArray(body.addOns)
    const needs = asStringArray(body.needs)

    const missing = REQUIRED[inquiryType].filter(
      (key) => !fields[key as keyof typeof fields]
    )
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(fields.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const budgetLabel = fields.budgetRange
      ? (BUDGET_LABELS[fields.budgetRange] ?? fields.budgetRange)
      : ''

    // Row values are pre-rendered HTML (labels are our own constants)
    const contactRows: Array<[string, string]> = [
      ['Name', escapeHtml(fields.name)],
      [
        'Email',
        `<a href="mailto:${escapeHtml(fields.email)}">${escapeHtml(fields.email)}</a>`,
      ],
      ['Phone', escapeHtml(fields.phone)],
    ]

    let detailRows: Array<[string, string]>
    if (inquiryType === 'dj') {
      detailRows = [
        ['Event Date', escapeHtml(fields.eventDate)],
        ['Event Type', escapeHtml(fields.eventType)],
        ['City / Venue', escapeHtml(fields.cityVenue)],
        ['Guests', escapeHtml(fields.guestCount)],
        ['Indoor / Outdoor', escapeHtml(fields.indoorOutdoor)],
        ['Music Vibe', escapeHtml(fields.musicVibe)],
        ['Add-ons Requested', escapeHtml(addOns.join(', '))],
        ['Budget Range', escapeHtml(budgetLabel)],
        ['Message', multiline(fields.message)],
      ]
    } else if (inquiryType === 'production') {
      detailRows = [
        ['Event Date(s)', escapeHtml(fields.eventDate)],
        ['Event Type', escapeHtml(fields.eventType)],
        ['City / Venue', escapeHtml(fields.cityVenue)],
        ['Expected Attendance', escapeHtml(fields.attendance)],
        ['Needs', escapeHtml(needs.join(', '))],
        ['Indoor / Outdoor', escapeHtml(fields.indoorOutdoor)],
        ['Venue Power', escapeHtml(fields.venuePower)],
        ['Setup / Load-in Notes', multiline(fields.setupNotes)],
        ['Budget Range', escapeHtml(budgetLabel)],
        ['Message', multiline(fields.message)],
      ]
    } else {
      // Legacy payloads land here; keep rendering their optional fields
      detailRows = [
        ['Topic', escapeHtml(fields.topic)],
        ['Event Date', escapeHtml(fields.eventDate)],
        ['City / Venue', escapeHtml(fields.cityVenue)],
        ['Budget Range', escapeHtml(budgetLabel)],
        ['Message', multiline(fields.message)],
      ]
    }

    const renderedRows = [...contactRows, ...detailRows]
      .filter(([, value]) => value)
      .map(
        ([label, value]) => `
              <div class="field">
                <div class="label">${label}:</div>
                <div class="value">${value}</div>
              </div>`
      )
      .join('')

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
              <h1>${INQUIRY_LABELS[inquiryType]}</h1>
              <p>Dub Electric Experience | Website Form</p>
            </div>
            <div class="content">${renderedRows}
            </div>
            <div class="footer">
              <p>This inquiry was submitted through dubelectricexp.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    const subject = sanitizeSubject(
      inquiryType === 'dj'
        ? `[DJ BOOKING] ${fields.eventType} - ${fields.eventDate} - ${fields.cityVenue || 'Location TBD'} - ${fields.name}`
        : inquiryType === 'production'
          ? `[PRODUCTION] ${fields.eventType} - ${fields.eventDate} - ${fields.cityVenue || 'Location TBD'} - ${fields.name}`
          : `[INQUIRY] ${fields.topic || 'General'} - ${fields.name}`
    )

    // Send email (currently only to dubelectricexp@gmail.com due to Resend free tier)
    // To send to multiple addresses, verify your domain at resend.com/domains
    const { data, error } = await resend.emails.send({
      from: 'Dub Electric <onboarding@resend.dev>',
      to: 'dubelectricexp@gmail.com',
      replyTo: fields.email,
      subject,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully:', data?.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
