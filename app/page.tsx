'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { CheckoutForm } from '@/components/CheckoutForm'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const PRICING_PLANS = [
  {
    name: 'Basic',
    price: 19,
    description: 'Perfect for small projects and startups',
    features: [
      '2 CPU Cores',
      '4GB RAM',
      '50GB SSD Storage',
      '5TB Bandwidth',
      '99.5% Uptime SLA',
      '24/7 Support',
    ],
  },
  {
    name: 'Pro',
    price: 49,
    description: 'Ideal for growing businesses',
    features: [
      '8 CPU Cores',
      '16GB RAM',
      '200GB SSD Storage',
      '25TB Bandwidth',
      '99.95% Uptime SLA',
      '24/7 Priority Support',
      'Free SSL Certificate',
      'Auto Backups',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large-scale applications',
    features: [
      '32 CPU Cores',
      '64GB RAM',
      '1TB SSD Storage',
      'Unlimited Bandwidth',
      '99.99% Uptime SLA',
      'Dedicated Support',
      'Free SSL Certificate',
      'Daily Backups',
      'DDoS Protection',
    ],
  },
]

const FEATURES = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security features including DDoS protection and SSL certificates',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'High-performance infrastructure with SSD storage and optimized networks',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Deploy anywhere with data centers across multiple regions worldwide',
  },
]

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>()
  const { toast } = useToast()

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
    setCheckoutOpen(true)
  }

  const handleCheckoutSubmit = (data: any) => {
    toast({
      title: 'Order Placed Successfully',
      description: `You've selected the ${data.plan} plan. You'll receive a confirmation email at ${data.email}`,
      variant: 'default',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Enterprise VPS Hosting
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                {' '}for Everyone
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              High-performance, reliable, and scalable VPS infrastructure tailored to your needs. Start small and grow without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => setCheckoutOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 h-12 gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-border/40 text-lg px-8 h-12"
                asChild
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
            {[
              { label: 'Uptime', value: '99.99%' },
              { label: 'Data Centers', value: '12+' },
              { label: 'Customers', value: '50K+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose EMBROJIN?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for reliable and scalable hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="p-6 rounded-lg border border-border/40 hover:border-border/60 transition-colors">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <PricingCard
                key={plan.name}
                {...plan}
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Choose your plan and launch your VPS in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Select Plan', desc: 'Pick the perfect plan for your needs' },
              { step: '2', title: 'Provide Details', desc: 'Enter your billing information' },
              { step: '3', title: 'Launch', desc: 'Your VPS is ready to use immediately' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => setCheckoutOpen(true)}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-12 h-12 gap-2"
            >
              Start Now <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <CheckoutForm
        isOpen={checkoutOpen}
        selectedPlan={selectedPlan}
        onClose={() => setCheckoutOpen(false)}
        onSubmit={handleCheckoutSubmit}
      />

      <Footer />
    </div>
  )
}
