"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Locale = "en" | "es"

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  tv: <T = unknown>(key: string) => T
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const dict: Record<Locale, Record<string, any>> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      resources: "Resources",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      contact: "Contact",
    },
    cta: {
      freeConsultation: "Free Consultation",
      bookFreeConsultation: "Book a Free Consultation",
      exploreServices: "Explore Services",
      bookConsultation: "Book Consultation",
      browseResources: "Browse Resources",
      subscribe: "Subscribe",
    },
    brand: {
      tagline: "Early childhood consulting that delivers measurable outcomes.",
    },
    home: {
      hero: {
        title: "BrightStartEd: Early Education Consulting for Pre‑K Success",
        subtitle:
          "Partner with experts in early childhood education. We design curricula, train teachers, and boost school readiness with data-driven strategies.",
      },
      differentiators: {
        heading: "Why BrightStartEd",
        items: [
          { title: "95% Success Rate", desc: "Evidence-based methodology improves readiness scores." },
          { title: "Compliance Ready", desc: "Aligned with state and federal early childhood standards." },
          { title: "Customized Programs", desc: "Tailored solutions for your school's unique needs." },
          { title: "Ongoing Support", desc: "Post-implementation coaching and data reviews." },
        ],
      },
      testimonialsHeading: "What Schools Are Saying",
      featuredHeading: "Trusted by Schools and Districts",
      ctaBlock: {
        heading: "Ready to boost Pre‑K readiness?",
        sub: "Book a free 30-minute consultation or join our newsletter to get our latest guides and checklists.",
      },
      viewAll: "View all",
    },
    cookie: {
      bannerText: "We use cookies to enhance your experience and for analytics. See our",
      policy: "Cookie Policy",
      accept: "Accept",
      decline: "Decline",
    },
    exitIntent: {
      title: "Get our Pre‑K Readiness Guide",
      desc: "Subscribe and we'll send the checklist to your inbox.",
    },
    footer: {
      company: "Company",
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      accessibility: "Accessibility",
      cookies: "Cookie Policy",
      email: "hello@brightstarted.org",
      phone: "+1 (888) 555-1234",
      addr1: "123 Learning Way, Suite 200",
      rights: "All rights reserved.",
    },
    socialProof: [
      "Northview SD booked a consultation",
      "Meadowbrook Elementary downloaded the readiness guide",
      "Little Oaks Academy scheduled a PD session",
      "Maple Ridge SD requested a compliance review",
    ],
  },
  es: {
    nav: {
      about: "Nosotros",
      services: "Servicios",
      resources: "Recursos",
      caseStudies: "Casos de Éxito",
      pricing: "Precios",
      contact: "Contacto",
    },
    cta: {
      freeConsultation: "Consulta Gratis",
      bookFreeConsultation: "Reservar una Consulta Gratis",
      exploreServices: "Explorar Servicios",
      bookConsultation: "Reservar Consulta",
      browseResources: "Ver Recursos",
      subscribe: "Suscribirse",
    },
    brand: {
      tagline: "Consultoría de primera infancia con resultados medibles.",
    },
    home: {
      hero: {
        title: "BrightStartEd: Consultoría en Educación Inicial para Éxito en Pre‑K",
        subtitle:
          "Colabore con expertos en educación infantil. Diseñamos currículos, capacitamos docentes y mejoramos la preparación escolar con estrategias basadas en datos.",
      },
      differentiators: {
        heading: "Por qué BrightStartEd",
        items: [
          { title: "95% de Éxito", desc: "Metodología basada en evidencia que mejora los indicadores de preparación." },
          { title: "Listo para Cumplimiento", desc: "Alineado con normas estatales y federales de educación infantil." },
          { title: "Programas Personalizados", desc: "Soluciones adaptadas a las necesidades de su escuela." },
          { title: "Acompañamiento Continuo", desc: "Coaching y análisis de datos post‑implementación." },
        ],
      },
      testimonialsHeading: "Lo que Dicen las Escuelas",
      featuredHeading: "Confiado por Escuelas y Distritos",
      ctaBlock: {
        heading: "¿Listos para impulsar la preparación en Pre‑K?",
        sub: "Reserve una consulta gratuita de 30 minutos o suscríbase para recibir nuestras guías y listas de verificación.",
      },
      viewAll: "Ver todo",
    },
    cookie: {
      bannerText: "Usamos cookies para mejorar su experiencia y para analíticas. Consulte nuestra",
      policy: "Política de Cookies",
      accept: "Aceptar",
      decline: "Rechazar",
    },
    exitIntent: {
      title: "Obtén nuestra Guía de Preparación para Pre‑K",
      desc: "Suscríbete y te enviaremos la lista de verificación por correo.",
    },
    footer: {
      company: "Compañía",
      legal: "Legal",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      accessibility: "Accesibilidad",
      cookies: "Política de Cookies",
      email: "hello@brightstarted.org",
      phone: "+1 (888) 555-1234",
      addr1: "123 Learning Way, Suite 200",
      rights: "Todos los derechos reservados.",
    },
    socialProof: [
      "Northview SD reservó una consulta",
      "Meadowbrook Elementary descargó la guía de preparación",
      "Little Oaks Academy programó una sesión de capacitación",
      "Maple Ridge SD solicitó una revisión de cumplimiento",
    ],
  },
}

function get(obj: Record<string, any>, path: string): any {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const saved = (localStorage.getItem("bsed_locale") as Locale | null) ?? null
    if (saved === "en" || saved === "es") {
      setLocale(saved)
    } else {
      const nav = (navigator?.language || "en").toLowerCase()
      setLocale(nav.startsWith("es") ? "es" : "en")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("bsed_locale", locale)
  }, [locale])

  const value = useMemo<I18nContextType>(() => {
    return {
      locale,
      setLocale: (l: Locale) => setLocale(l),
      t: (key: string, params?: Record<string, string | number>) => {
        const base = get(dict[locale] ?? dict.en, key) ?? get(dict.en, key) ?? key
        if (typeof base === "string" && params) {
          return Object.keys(params).reduce((s, p) => s.replaceAll(`{${p}}`, String(params[p]!)), base)
        }
        return typeof base === "string" ? base : key
      },
      tv: <T = unknown>(key: string) => {
        const base = get(dict[locale] ?? dict.en, key)
        if (base !== undefined) return base as T
        const fallback = get(dict.en, key)
        return (fallback as T) ?? (undefined as T)
      },
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
