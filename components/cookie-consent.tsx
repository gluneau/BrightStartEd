"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "./i18n-provider"

export default function CookieConsent({}: Record<string, never> = {}) {
  const [visible, setVisible] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const pref = localStorage.getItem("cookie-consent")
    if (!pref) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-700">
          {t("cookie.bannerText")}{" "}
          <Link href="/cookies" className="underline">
            {t("cookie.policy")}
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={decline}>
            {t("cookie.decline")}
          </Button>
          <Button className="bg-[#2E7D32] hover:bg-[#256428]" onClick={accept}>
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  )
}
