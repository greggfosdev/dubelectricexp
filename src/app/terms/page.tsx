import { Section } from '@/components/ui/Section'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Dub Electric - Rules and guidelines for using our services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24">
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Agreement to Terms</h2>
              <p className="text-foreground leading-relaxed">
                Welcome to Dub Electric. These Terms and Conditions ("Terms") govern your access to and use of our website dubelectricexp.com (the "Site") and any services we provide. By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-foreground leading-relaxed">
                If you do not agree to these Terms, you must not access or use the Site.
              </p>
            </section>

            {/* Use of Site */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Use of Site</h2>

              <h3 className="text-xl font-semibold text-foreground">Permitted Use</h3>
              <p className="text-foreground leading-relaxed">
                You may use our Site for lawful purposes only. You agree not to use the Site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Dub Electric, our employees, or any other person or entity</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                <li>To introduce any viruses, trojans, worms, logic bombs, or other malicious material</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">Age Restriction</h3>
              <p className="text-foreground leading-relaxed">
                You must be at least 18 years old to make a booking inquiry or purchase merchandise through our Site. By using our services, you represent that you meet this age requirement.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Intellectual Property Rights</h2>
              <p className="text-foreground leading-relaxed">
                The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, design, logos, and the selection and arrangement thereof) are owned by Dub Electric and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-foreground leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
              </p>
            </section>

            {/* Music and Content */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Music and Audio Content</h2>
              <p className="text-foreground leading-relaxed">
                All music, mixes, and audio content made available on or through the Site are the property of Dub Electric or our licensors. Unauthorized downloading, copying, or distribution of our content is strictly prohibited and may violate copyright laws.
              </p>
              <p className="text-foreground leading-relaxed">
                Embedded audio players (e.g., SoundCloud) are subject to the terms and conditions of those third-party platforms.
              </p>
            </section>

            {/* Booking Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Booking Services</h2>

              <h3 className="text-xl font-semibold text-foreground">Inquiries</h3>
              <p className="text-foreground leading-relaxed">
                Submitting a booking inquiry through our contact form does not constitute a binding agreement. All bookings are subject to availability and our approval. We will respond to your inquiry within 48 business hours.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Booking Agreements</h3>
              <p className="text-foreground leading-relaxed">
                Once a booking is confirmed, a separate performance agreement or contract will be executed. That agreement will govern the specific terms of the performance, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Date, time, and location of performance</li>
                <li>Performance duration and set requirements</li>
                <li>Compensation and payment terms</li>
                <li>Technical requirements and rider specifications</li>
                <li>Cancellation and rescheduling policies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">Cancellation Policy</h3>
              <p className="text-foreground leading-relaxed">
                Cancellation terms will be specified in each individual booking agreement. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Cancellations made 30+ days before the event may receive a full refund of deposits</li>
                <li>Cancellations made 14-29 days before the event may receive a 50% refund</li>
                <li>Cancellations made less than 14 days before the event are generally non-refundable</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                We reserve the right to cancel a booking due to force majeure, illness, or unforeseen circumstances. In such cases, deposits will be refunded in full.
              </p>
            </section>

            {/* Merchandise */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Merchandise Sales</h2>

              <h3 className="text-xl font-semibold text-foreground">Print-on-Demand</h3>
              <p className="text-foreground leading-relaxed">
                Our merchandise is produced on-demand through third-party vendors. Orders typically ship within 3-10 business days. Shipping times vary by location.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Returns and Exchanges</h3>
              <p className="text-foreground leading-relaxed">
                We accept returns of unworn, unwashed merchandise within 30 days of receipt. Custom or sale items are final sale. To initiate a return, contact us at{' '}
                <a href="mailto:merch@dubelectricexp.com" className="text-accent hover:text-accent/80 underline">
                  merch@dubelectricexp.com
                </a>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Payment Processing</h3>
              <p className="text-foreground leading-relaxed">
                Payments for merchandise are processed by our third-party payment providers. We do not store credit card information on our servers.
              </p>
            </section>

            {/* User Content */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">User-Generated Content</h2>
              <p className="text-foreground leading-relaxed">
                If you submit content to us (such as photos, videos, testimonials, or comments through social media or email), you grant us a non-exclusive, royalty-free, perpetual, worldwide license to use, reproduce, modify, and display that content for promotional purposes.
              </p>
              <p className="text-foreground leading-relaxed">
                You represent and warrant that you own or have the necessary rights to any content you submit and that such content does not violate any third-party rights.
              </p>
            </section>

            {/* External Links */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Third-Party Links and Services</h2>
              <p className="text-foreground leading-relaxed">
                Our Site may contain links to third-party websites and services (such as SoundCloud, Instagram, merchandise vendors, etc.) that are not owned or controlled by Dub Electric.
              </p>
              <p className="text-foreground leading-relaxed">
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be liable for any damage or loss caused by use of such content, goods, or services available through such websites.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Disclaimer of Warranties</h2>
              <p className="text-foreground leading-relaxed">
                THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS, AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
              </p>
              <p className="text-foreground leading-relaxed">
                DUB ELECTRIC MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS, OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE THROUGH THE SITE.
              </p>
              <p className="text-foreground leading-relaxed">
                TO THE FULL EXTENT PERMISSIBLE BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL DUB ELECTRIC, ITS AFFILIATES, MEMBERS, DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY.
              </p>
              <p className="text-foreground leading-relaxed">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SITE SHALL NOT EXCEED $100 OR THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, WHICHEVER IS GREATER.
              </p>
            </section>

            {/* Indemnification */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Indemnification</h2>
              <p className="text-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless Dub Electric and its members, officers, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Governing Law and Jurisdiction</h2>
              <p className="text-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-foreground leading-relaxed">
                Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in New York, and you irrevocably consent to the personal jurisdiction and venue therein.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Changes to Terms</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material changes, we will provide notice by posting the updated Terms on this page and updating the "Last updated" date.
              </p>
              <p className="text-foreground leading-relaxed">
                Your continued use of the Site after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Severability</h2>
              <p className="text-foreground leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Entire Agreement</h2>
              <p className="text-foreground leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Dub Electric regarding the use of the Site and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="text-foreground space-y-2 ml-4">
                <p>
                  Email:{' '}
                  <a href="mailto:legal@dubelectricexp.com" className="text-accent hover:text-accent/80 underline">
                    legal@dubelectricexp.com
                  </a>
                </p>
                <p>Website: dubelectricexp.com</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </div>
  )
}
