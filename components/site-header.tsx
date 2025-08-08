"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from "react"
import { cn } from "@/lib/utils"
import LanguageToggle from "./language-toggle"
import { useI18n } from "./i18n-provider"

export default function SiteHeader({}: Record<string, never> = {}) {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const nav = [
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/resources", label: t("nav.resources") },
    { href: "/testimonials", label: t("nav.caseStudies") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ]
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-extrabold tracking-tight text-xl" aria-label="BrightStartEd home">
          <span className="text-[#2E7D32]">Bright</span>
          <span className="text-[#5C6BC0]">Start</span>
          <span className="text-slate-900">Ed</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <Button asChild size="sm" className="bg-[#2E7D32] hover:bg-[#256428]">
            <Link href="/booking">{t("cta.freeConsultation")}</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className={cn("md:hidden border-t bg-white", open ? "block" : "hidden")}>
        <div className="container mx-auto flex flex-col gap-2 px-4 py-3">
          <div className="pb-2">
            <LanguageToggle />
          </div>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="py-2 text-slate-700 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild className="bg-[#2E7D32] hover:bg-[#256428]">
            <Link href="/booking" onClick={() => setOpen(false)}>
              {t("cta.freeConsultation")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
