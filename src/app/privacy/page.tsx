import { Section } from '@/components/ui/Section'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Dub Electric - How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
              <p className="text-foreground leading-relaxed">
                Dub Electric ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dubelectricexp.com (the "Site") or engage with our services.
              </p>
              <p className="text-foreground leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
              <p className="text-foreground leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Submit a booking inquiry or contact form</li>
                <li>Subscribe to our newsletter or mailing list</li>
                <li>Purchase merchandise from our store</li>
                <li>Interact with us on social media</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                This information may include: name, email address, phone number, event details, venue information, budget preferences, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Automatically Collected Information</h3>
              <p className="text-foreground leading-relaxed">
                When you visit our Site, we may automatically collect certain information about your device and browsing activity, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring/exit pages and URLs</li>
                <li>Click patterns and site navigation</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Respond to booking inquiries and event requests</li>
                <li>Send newsletters, promotional materials, and updates about upcoming events</li>
                <li>Process merchandise orders and fulfill purchases</li>
                <li>Improve our website and user experience</li>
                <li>Analyze site usage and trends</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
              <p className="text-foreground leading-relaxed">
                Our Site may contain embedded content and links to third-party services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li><strong>SoundCloud:</strong> For music streaming and audio embeds</li>
                <li><strong>Social Media Platforms:</strong> Instagram, Twitter/X, etc.</li>
                <li><strong>Print-on-Demand Providers:</strong> For merchandise fulfillment</li>
                <li><strong>Payment Processors:</strong> For merchandise transactions</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                These third-party services have their own privacy policies. We are not responsible for the privacy practices of these external sites and services.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking Technologies</h2>
              <p className="text-foreground leading-relaxed">
                We may use cookies, web beacons, and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our Site</li>
                <li>Improve site performance and functionality</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our Site.
              </p>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              <p className="text-foreground leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Your Privacy Rights</h2>
              <p className="text-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@dubelectricexp.com" className="text-accent hover:text-accent/80 underline">
                  privacy@dubelectricexp.com
                </a>
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
              <p className="text-foreground leading-relaxed">
                Our Site is not intended for children under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* International Users */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">International Users</h2>
              <p className="text-foreground leading-relaxed">
                If you are accessing our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our Site, you consent to this transfer.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Us */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-foreground space-y-2 ml-4">
                <p>
                  Email:{' '}
                  <a href="mailto:privacy@dubelectricexp.com" className="text-accent hover:text-accent/80 underline">
                    privacy@dubelectricexp.com
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
