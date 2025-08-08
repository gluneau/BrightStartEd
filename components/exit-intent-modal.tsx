"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import NewsletterInline from "./newsletter-inline"
import { useI18n } from "./i18n-provider"

export default function ExitIntentModal({}: Record<string, never> = {}) {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const key = "bsed_exit_intent_shown"
    const already = localStorage.getItem(key)
    if (already) return

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        localStorage.setItem(key, "1")
        setOpen(true)
        window.removeEventListener("mouseout", onMouseOut)
      }
    }

    const onScroll = () => {
      if (window.scrollY > 600 && !localStorage.getItem(key)) {
        localStorage.setItem(key, "1")
        setOpen(true)
        window.removeEventListener("scroll", onScroll)
      }
    }

    window.addEventListener("mouseout", onMouseOut)
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("mouseout", onMouseOut)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent aria-describedby="exit-intent-desc">
        <DialogHeader>
          <DialogTitle>{t("exitIntent.title")}</DialogTitle>
          <DialogDescription id="exit-intent-desc">
            {t("exitIntent.desc")}
          </DialogDescription>
        </DialogHeader>
        <NewsletterInline />
      </DialogContent>
    </Dialog>
  )
}
