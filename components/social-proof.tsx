"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "./i18n-provider"

export default function SocialProof({}: Record<string, never> = {}) {
  const { toast } = useToast()
  const { locale } = useI18n()

  useEffect(() => {
    const messages =
      locale === "es"
        ? [
            "Northview SD reservó una consulta",
            "Meadowbrook Elementary descargó la guía de preparación",
            "Little Oaks Academy programó una sesión de capacitación",
            "Maple Ridge SD solicitó una revisión de cumplimiento",
          ]
        : [
            "Northview SD booked a consultation",
            "Meadowbrook Elementary downloaded the readiness guide",
            "Little Oaks Academy scheduled a PD session",
            "Maple Ridge SD requested a compliance review",
          ]

    let i = 0
    const id = setInterval(() => {
      toast({
        title: locale === "es" ? "Actividad reciente" : "Recent activity",
        description: messages[i % messages.length],
      })
      i++
    }, 18000)
    return () => clearInterval(id)
  }, [toast, locale])

  return null
}
