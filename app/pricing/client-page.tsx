"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RoiCalculator from "@/components/roi-calculator"

export default function PricingClientPage() {
  const tiers = [
    {
      name: "Starter",
      price: "From $3,500",
      features: ["1 on-site PD day", "Virtual coaching x2", "Readiness checklist"],
    },
    {
      name: "Growth",
      price: "From $9,500",
      features: ["3 PD days", "Coaching cycle (6 sessions)", "Compliance templates", "Data review"],
    },
    {
      name: "District",
      price: "Custom",
      features: ["Multi-school rollout", "Train-the-trainer PD", "Dedicated consultant", "Quarterly data reviews"],
    },
  ]
  const [selected, setSelected] = useState(1)

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Pricing & ROI</h1>
      <p className="text-slate-700 mb-8">
        We offer flexible options for schools and districts. Get a custom quote based on your goals, scale, and timeline.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Card key={i} className={i === selected ? "border-[#2E7D32]" : ""}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <div className="text-xl">{t.price}</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 text-sm text-slate-700">
                {t.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <div className="pt-3">
                <Button
                  variant={i === selected ? "default" : "outline"}
                  className={i === selected ? "bg-[#2E7D32] hover:bg-[#256428]" : ""}
                  onClick={() => setSelected(i)}
                >
                  {i === selected ? "Selected" : "Select"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button className="bg-[#2E7D32] hover:bg-[#256428]" asChild>
          <Link href="/contact">Contact for Custom Quote</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/booking">Book Consultation</Link>
        </Button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Estimate Your ROI</h2>
        <RoiCalculator />
      </div>

      <div className="mt-8 text-xs text-slate-500">
        Note: Pricing subject to scope and location. Grant assistance information available upon request.
      </div>
    </div>
  )
}
