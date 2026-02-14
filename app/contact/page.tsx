import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Have questions about our VPS hosting? Our team is here to help you find the perfect solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="border-border/40 p-6">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a href="mailto:support@URGFLY.com" className="text-accent hover:text-accent/80 transition-colors">
                support@URGFLY.com
              </a>
            </Card>

            <Card className="border-border/40 p-6">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">Call us 24/7 for support</p>
              <a href="tel:+1234567890" className="text-accent hover:text-accent/80 transition-colors">
                +1 (234) 567-890
              </a>
            </Card>

            <Card className="border-border/40 p-6">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground">
                123 Tech Street<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/40 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: 'How long does it take to set up a VPS?',
                  a: 'Your VPS is typically deployed within minutes after order confirmation. You can start using it immediately.'
                },
                {
                  q: 'Can I upgrade my plan later?',
                  a: 'Yes! You can upgrade or downgrade your plan anytime. Changes take effect immediately with no downtime.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept credit cards, PayPal, and cryptocurrencies for maximum flexibility.'
                },
                {
                  q: 'Is there a money-back guarantee?',
                  a: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
                },
              ].map((item, index) => (
                <Card key={index} className="border-border/40 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
