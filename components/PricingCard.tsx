'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
  onSelect: (plan: string) => void
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  onSelect,
}: PricingCardProps) {
  return (
    <Card
      className={`relative flex flex-col p-6 transition-all duration-300 ${
        isPopular
          ? 'border-accent shadow-lg shadow-accent/20 scale-105'
          : 'border-border/40 hover:border-border/60'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">${price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => onSelect(name)}
        className={`w-full ${
          isPopular
            ? 'bg-accent hover:bg-accent/90 text-white'
            : 'border border-border/40 bg-transparent text-foreground hover:bg-secondary/20'
        }`}
      >
        Select Plan
      </Button>
    </Card>
  )
}
