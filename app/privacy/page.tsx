import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: February 13, 2024</p>
          </div>

          <article className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                EMBROJIN ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information about you in connection with our websites, applications, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Account Information:</strong> Name, email address, phone number, company name, and billing address</li>
                <li><strong>Payment Information:</strong> Credit card details, PayPal account information, and cryptocurrency wallet addresses</li>
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Usage Information:</strong> How you interact with our website and services, pages visited, and time spent on pages</li>
                <li><strong>Communication Information:</strong> Messages you send us through our contact form or support channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process payments and send billing information</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To send promotional emails and newsletters (with your consent)</li>
                <li>To comply with legal obligations and enforce our agreements</li>
                <li>To prevent fraud and ensure security of our services</li>
                <li>To analyze usage patterns and improve our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process your personal information based on the following legal grounds: (1) to perform our contract with you, (2) to comply with legal obligations, (3) for our legitimate interests, and (4) with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Service providers who assist us in operating our website and services</li>
                <li>Payment processors for payment processing</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties when you consent to such sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, fulfill the purposes outlined in this Privacy Policy, and comply with legal obligations. When information is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your information</li>
                <li>Right to restrict processing of your information</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise any of these rights, please contact us at privacy@embrojin.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website usage. You can control cookie settings through your browser, though disabling cookies may limit functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. GDPR Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We comply with the General Data Protection Regulation (GDPR) for users in the European Union. Our lawful basis for processing includes contractual necessity, legal compliance, and legitimate interests. You have the right to lodge a complaint with a supervisory authority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date at the top of this page. Your continued use of our services constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="p-4 bg-secondary/30 rounded-lg border border-border/40 text-muted-foreground">
                <p>EMBROJIN Privacy Team</p>
                <p>Email: privacy@embrojin.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Tech Street, San Francisco, CA 94102</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
