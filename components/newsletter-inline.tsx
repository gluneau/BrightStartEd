"use client"

import { useActionState } from "react"
import { subscribeNewsletter } from "@/app/server-actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useI18n } from "./i18n-provider"

type State = { ok?: boolean; message?: string; errors?: Record<string, string> }
const initial: State = {}

export default function NewsletterInline({}: Record<string, never> = {}) {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter as unknown as (prevState: State, formData: FormData) => Promise<State>, initial)

  const { t } = useI18n()

  return (
    <form action={formAction} className="grid gap-3" aria-label="Newsletter signup form">
      <div className="grid gap-2">
        <Label htmlFor="newsletter-email" className="sr-only">Email</Label>
        <Input id="newsletter-email" name="email" type="email" placeholder="you@school.edu" required />
        {state?.errors?.email && <p className="text-sm text-red-600">{state.errors.email}</p>}
      </div>
      <input type="hidden" name="source" value="inline" />
      <Button type="submit" className="bg-[#2E7D32] hover:bg-[#256428]" disabled={isPending}>
        {isPending ? "…" : t("cta.subscribe")}
      </Button>
      {state?.message && (
        <p className={state.ok ? "text-sm text-green-700" : "text-sm text-red-600"}>{state.message}</p>
      )}
    </form>
  )
}
