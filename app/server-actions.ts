"use server"

import { z } from "zod"

const emailSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  source: z.string().optional(),
})

export async function subscribeNewsletter(_: unknown, formData: FormData) {
  const data = {
    email: (formData.get("email") as string | null) ?? "",
    source: (formData.get("source") as string | null) ?? "unknown",
  }
  const parsed = emailSchema.safeParse(data)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    parsed.error.issues.forEach((i) => (errors[i.path.join(".")] = i.message))
    return { ok: false, message: "Please fix the errors and try again.", errors }
  }

  // Optional HubSpot integration (graceful fallback)
  try {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
    if (token) {
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          properties: {
            email: data.email,
            lifecyclestage: "subscriber",
            source: data.source,
          },
        }),
      })
    } else {
      console.log("[Newsletter] Captured:", data)
    }
  } catch (e) {
    console.error(e)
  }

  return { ok: true, message: "Thanks for subscribing!" }
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  organization: z.string().min(2, "Enter your school or organization."),
  role: z.string().min(2, "Enter your role/title."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().optional(),
  service: z.enum(["curriculum", "pd", "compliance", "classroom", "assessments"]),
  message: z.string().min(10, "Please provide more details."),
  referral: z.string().optional(),
  website: z.string().optional(), // honeypot
})

function scoreLead(input: z.infer<typeof contactSchema>) {
  let score = 0
  if (input.service === "district") score += 15
  if (input.organization.toLowerCase().includes("district")) score += 10
  if (input.message.length > 200) score += 5
  if (input.role.toLowerCase().includes("principal") || input.role.toLowerCase().includes("director")) score += 8
  return score
}

export async function submitContactForm(_: unknown, formData: FormData) {
  const input = {
    name: (formData.get("name") as string | null) ?? "",
    organization: (formData.get("organization") as string | null) ?? "",
    role: (formData.get("role") as string | null) ?? "",
    email: (formData.get("email") as string | null) ?? "",
    phone: (formData.get("phone") as string | null) ?? "",
    service: (formData.get("service") as string | null) ?? "curriculum",
    message: (formData.get("message") as string | null) ?? "",
    referral: (formData.get("referral") as string | null) ?? "",
    website: (formData.get("website") as string | null) ?? "", // honeypot
  }

  // Spam check (honeypot)
  if (input.website) {
    return { ok: true, message: "Thanks! We will be in touch shortly." }
  }

  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    parsed.error.issues.forEach((i) => (errors[i.path.join(".")] = i.message))
    return { ok: false, message: "Please fix the errors and try again.", errors }
  }

  const score = scoreLead(parsed.data)

  // Optional HubSpot integration (contact + note)
  try {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
    if (token) {
      // Upsert contact
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          properties: {
            email: parsed.data.email,
            firstname: parsed.data.name,
            company: parsed.data.organization,
            jobtitle: parsed.data.role,
            phone: parsed.data.phone,
            lifecyclestage: "marketingqualifiedlead",
            hs_lead_status: "NEW",
            bsed_lead_score: score,
            referral_source: parsed.data.referral,
            service_interest: parsed.data.service,
          },
        }),
      })
    } else {
      console.log("[Contact] Lead:", { ...parsed.data, score })
    }
  } catch (e) {
    console.error(e)
  }

  // Auto-response email could be added here if SMTP envs are provided.
  return { ok: true, message: "Thanks! We will be in touch within one business day." }
}

const leadCaptureSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  resource: z.literal("prek-readiness-checklist"),
})

export async function submitLeadCapture(formData: FormData) {
  const input = {
    name: (formData.get("name") as string | null) ?? "",
    email: (formData.get("email") as string | null) ?? "",
    resource: (formData.get("resource") as string | null) ?? "",
  }
  const parsed = leadCaptureSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, message: "Please provide your name and a valid email." }
  }
  try {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
    if (token) {
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          properties: {
            email: parsed.data.email,
            firstname: parsed.data.name,
            lifecyclestage: "subscriber",
            last_converted_offer: parsed.data.resource,
          },
        }),
      })
    } else {
      console.log("[LeadCapture] Resource:", parsed.data)
    }
  } catch (e) {
    console.error(e)
  }
  return { ok: true, url: "/resources/prek-readiness-checklist.pdf" }
}
