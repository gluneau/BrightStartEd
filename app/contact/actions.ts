"use server"

import { submitContactForm as baseSubmitContactForm } from "@/app/server-actions"

// Re-export the Server Action expected by the client page.
// Keeping 'use server' in this file ensures Next treats this as an action.
export async function submitContactForm(prevState: unknown, formData: FormData) {
  return baseSubmitContactForm(prevState, formData)
}
