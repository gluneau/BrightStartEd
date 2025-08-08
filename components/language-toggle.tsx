"use client"

import { Globe, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useI18n } from "./i18n-provider"

export default function LanguageToggle({}: Record<string, never> = {}) {
  const { locale, setLocale } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label="Change language">
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{locale === "en" ? "English" : "Español"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLocale("en")}>
          {locale === "en" && <Check className="h-4 w-4 mr-2" />} English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("es")}>
          {locale === "es" && <Check className="h-4 w-4 mr-2" />} Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
