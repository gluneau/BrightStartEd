"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Calendar, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TrustBadges from "@/components/trust-badges"
import NewsletterInline from "@/components/newsletter-inline"
import { useRouter } from "next/navigation"
import { useI18n } from "@/components/i18n-provider"

export default function HomePage() {
  const router = useRouter()
  const { t, locale, tv } = useI18n()

  const differentiators = tv<Array<{ title: string; desc: string }>>("home.differentiators.items") || []
  const diffIcons = [TrendingUp, ShieldCheck, Sparkles, CheckCircle2]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2E7D32]/10 via-[#FFA726]/10 to-[#5C6BC0]/10" aria-hidden="true" />
        <div className="container mx-auto grid gap-8 px-4 py-12 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              {t("home.hero.title")}
            </h1>
            <p className="text-slate-600 md:text-lg" style={{ fontFamily: "var(--font-body)" }}>
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-[#2E7D32] hover:bg-[#256428]"
                size="lg"
                onClick={() => router.push("/booking")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t("cta.bookFreeConsultation")}
              </Button>
              <Button
                className="border-[#2E7D32] text-[#2E7D32]"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/services">{t("cta.exploreServices")}</Link>
              </Button>
            </div>
            <TrustBadges />
          </div>
          <div className="relative">
            <Image
              src="/teacher-pre-k.png"
              alt={locale === "es" ? "Docente guiando a estudiantes de Pre‑K en el aula" : "Educator guiding Pre‑K students in a classroom"}
              width={900}
              height={600}
              className="rounded-xl border object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold">{t("home.differentiators.heading")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ title, desc }, i) => {
            const Icon = diffIcons[i % diffIcons.length]
            return (
              <Card key={i} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-[#2E7D32]/10 p-2 text-[#2E7D32]" aria-hidden="true">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm text-slate-600">{desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">{t("home.testimonialsHeading")}</h2>
            <Button variant="outline" asChild>
              <Link href="/testimonials">{t("home.viewAll")}</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  locale === "es"
                    ? "Nuestra preparación de Pre‑K aumentó un 18% en un semestre. La capacitación fue práctica y empoderadora."
                    : "Our Pre‑K readiness jumped by 18% in one semester. The professional development was practical and empowering.",
                name: "Dr. Maria Chen",
                role: locale === "es" ? "Directora, Meadowbrook Elementary" : "Principal, Meadowbrook Elementary",
              },
              {
                quote:
                  locale === "es"
                    ? "BrightStartEd nos guió en cumplimiento y organización del aula. Los docentes se sintieron apoyados en todo momento."
                    : "BrightStartEd guided us through compliance and classroom setup. Teachers felt supported every step of the way.",
                name: "James Ortiz",
                role: locale === "es" ? "Director, Little Oaks Academy" : "Director, Little Oaks Academy",
              },
              {
                quote:
                  locale === "es"
                    ? "Las revisiones de datos y los ciclos de coaching marcaron una diferencia medible."
                    : "The data reviews and coaching cycles made a measurable difference for our students and staff.",
                name: "Ava Robinson",
                role: locale === "es" ? "Coordinadora Curricular, Northview SD" : "Curriculum Coordinator, Northview School District",
              },
            ].map((tItem, idx) => (
              <Card key={idx} className="border-slate-200">
                <CardContent className="p-6">
                  <p className="text-slate-700">{"“" + tItem.quote + "”"}</p>
                  <div className="mt-4 text-sm font-medium">{tItem.name}</div>
                  <div className="text-xs text-slate-500">{tItem.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("home.featuredHeading")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center rounded-md border p-4 bg-white">
              <Image
                src="/generic-school-logo.png"
                alt={(locale === "es" ? "Logo de escuela cliente " : "Client school logo ") + (i + 1)}
                width={160}
                height={64}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA + Newsletter */}
      <section className="bg-[#5C6BC0]/5">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <h3 className="text-2xl font-bold">{t("home.ctaBlock.heading")}</h3>
            <p className="text-slate-600">
              {t("home.ctaBlock.sub")}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild className="bg-[#2E7D32] hover:bg-[#256428]">
                <Link href="/booking">{t("cta.bookConsultation")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resources">{t("cta.browseResources")}</Link>
              </Button>
            </div>
          </div>
          <div>
            <NewsletterInline />
          </div>
        </div>
      </section>
    </div>
  )
}
