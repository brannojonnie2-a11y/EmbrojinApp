import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">Last updated: February 13, 2024</p>
          </div>

          <article className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the URGFLY website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. URGFLY reserves the right to update these terms of service at any time without notice. You may view the most current version of these terms at any time by visiting this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                URGFLY provides Virtual Private Server (VPS) hosting services. Our services include but are not limited to server hosting, domain management, and technical support. We reserve the right to modify, suspend, or terminate services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You agree not to use your account to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Engage in illegal activity or violate any applicable laws</li>
                <li>Infringe on third-party intellectual property rights</li>
                <li>Engage in harassment, threats, or abusive behavior</li>
                <li>Distribute malware or viruses</li>
                <li>Engage in spam or phishing activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You agree to pay all charges incurred by your account in accordance with the pricing displayed on the website. We accept multiple payment methods including credit cards, PayPal, and cryptocurrency. Billing will occur on the day you establish your account and on the corresponding day each month thereafter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you are not satisfied with our service, you may request a refund within 30 days of purchase. Refunds are issued in the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Service Level Agreement</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                URGFLY commits to maintaining the following uptime guarantees:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Basic Plans: 99.5% uptime</li>
                <li>Pro Plans: 99.95% uptime</li>
                <li>Enterprise Plans: 99.99% uptime</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Scheduled maintenance is excluded from uptime calculations. For any downtime exceeding our SLA commitments, account credits will be issued as follows: 10% credit for 4-8 hours of downtime, 25% credit for 8-24 hours of downtime, and 50% credit for downtime exceeding 24 hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Content and Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to content you create and store on your VPS. However, you grant URGFLY the right to use, reproduce, and distribute your content solely for the purpose of providing the service. You warrant that all content is legal, does not infringe on third-party rights, and complies with all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitations of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                URGFLY shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, even if we have been advised of the possibility of such damages. Our liability is limited to the total amount paid for the service in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                URGFLY reserves the right to terminate your account and service at any time, with or without cause, and with or without notice. Upon termination, you will lose access to your account and any data stored on it. We are not responsible for data loss resulting from account termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                URGFLY reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after any modifications constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the State of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg border border-border/40 text-muted-foreground">
                <p>URGFLY Support</p>
                <p>Email: legal@URGFLY.com</p>
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
