import type { Metadata } from "next"
import ContactClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Contact | BrightStartEd",
  description:
    "Get in touch for service inquiries or questions. We respond within one business day.",
}

export default function ContactPage({ searchParams }: { searchParams?: { service?: string } }) {
  return <ContactClientPage defaultService={searchParams?.service} />
}
