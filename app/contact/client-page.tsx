"use client"

import { useActionState } from "react"
import { submitContactForm } from "./actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type State = {
  ok?: boolean
  message?: string
  errors?: Record<string, string>
}

const initialState: State = {}

const services = [
  { value: "curriculum", label: "Curriculum Design" },
  { value: "pd", label: "Professional Development" },
  { value: "compliance", label: "Compliance Support" },
  { value: "classroom", label: "Classroom Setup" },
  { value: "assessments", label: "Readiness Assessments" },
]

export default function ContactClientPage({ defaultService = "curriculum" }: { defaultService?: string }) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm as unknown as (prevState: State, formData: FormData) => Promise<State>,
    initialState
  )

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <form action={formAction} className="space-y-4" noValidate aria-describedby="contact-desc">
          <p id="contact-desc" className="sr-only">
            Contact form for schools and administrators to reach BrightStartEd.
          </p>

          {/* Honeypot field for spam protection */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required aria-invalid={!!state?.errors?.name} />
            {state?.errors?.name && <p className="text-sm text-red-600">{state.errors.name}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="org">School/Organization</Label>
            <Input id="org" name="organization" required aria-invalid={!!state?.errors?.organization} />
            {state?.errors?.organization && <p className="text-sm text-red-600">{state.errors.organization}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="role">Role/Title</Label>
            <Input id="role" name="role" required aria-invalid={!!state?.errors?.role} />
            {state?.errors?.role && <p className="text-sm text-red-600">{state.errors.role}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" required aria-invalid={!!state?.errors?.email} />
            {state?.errors?.email && <p className="text-sm text-red-600">{state.errors.email}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" type="tel" name="phone" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="service">Service Interest</Label>
            {/* Use native select so value is submitted with the form to the Server Action */}
            <select
              id="service"
              name="service"
              defaultValue={services.some(s => s.value === defaultService) ? defaultService : "curriculum"}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              aria-invalid={!!state?.errors?.service}
              required
            >
              {services.map(s => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {state?.errors?.service && <p className="text-sm text-red-600">{state.errors.service}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={6} aria-invalid={!!state?.errors?.message} />
            {state?.errors?.message && <p className="text-sm text-red-600">{state.errors.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="referral">How did you hear about us? (optional)</Label>
            <Input id="referral" name="referral" />
          </div>

          <Button className="bg-[#2E7D32] hover:bg-[#256428]" type="submit" disabled={isPending}>
            {isPending ? "Sending…" : "Send Inquiry"}
          </Button>
          {state?.message && <p className={state.ok ? "text-green-700" : "text-red-600"}>{state.message}</p>}
        </form>

        <div className="space-y-4">
          <div>
            <div className="font-semibold">Phone</div>
            <a className="text-[#2E7D32] underline" href="tel:+18885551234">
              +1 (888) 555-1234
            </a>
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <a className="text-[#2E7D32] underline" href="mailto:hello@brightstarted.org">
              hello@brightstarted.org
            </a>
          </div>
          <div>
            <div className="font-semibold">LinkedIn</div>
            <a className="text-[#2E7D32] underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <p className="text-slate-700">123 Learning Way, Suite 200, Springfield, ST 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}
