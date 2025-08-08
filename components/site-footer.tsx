'use client'

import Link from "next/link"
import { useI18n } from "./i18n-provider"

export default function SiteFooter({}: Record<string, never> = {}) {
  const { t } = useI18n()
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-4">
        <div>
          <div className="font-bold text-lg">
            <span className="text-[#2E7D32]">Bright</span>
            <span className="text-[#5C6BC0]">Start</span>
            <span className="text-slate-900">Ed</span>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            {t("brand.tagline")}
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">{t("footer.company")}</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">{t("nav.about")}</Link></li>
            <li><Link href="/services" className="hover:underline">{t("nav.services")}</Link></li>
            <li><Link href="/testimonials" className="hover:underline">{t("nav.caseStudies")}</Link></li>
            <li><Link href="/resources" className="hover:underline">{t("nav.resources")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">{t("footer.legal")}</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy" className="hover:underline">{t("footer.privacy")}</Link></li>
            <li><Link href="/terms" className="hover:underline">{t("footer.terms")}</Link></li>
            <li><Link href="/accessibility" className="hover:underline">{t("footer.accessibility")}</Link></li>
            <li><Link href="/cookies" className="hover:underline">{t("footer.cookies")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">{t("footer.contact")}</div>
          <ul className="space-y-1 text-sm">
            <li>{t("footer.email")}</li>
            <li>{t("footer.phone")}</li>
            <li>{t("footer.addr1")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BrightStartEd. {t("footer.rights")}
      </div>
    </footer>
  )
}
