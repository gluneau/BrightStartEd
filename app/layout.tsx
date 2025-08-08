import "./globals.css"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from 'next/font/google'
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CookieConsent from "@/components/cookie-consent"
import ExitIntentModal from "@/components/exit-intent-modal"
import SocialProof from "@/components/social-proof"
import { Toaster } from "@/components/ui/toaster"
import I18nProvider from "@/components/i18n-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BrightStartEd | Early Education Consulting",
  description:
    "Evidence-based early childhood education consulting for public and private schools. Book a free 30-minute consultation.",
  metadataBase: new URL("https://www.brightstarted.example.com"),
  openGraph: {
    title: "BrightStartEd | Early Education Consulting",
    description:
      "Evidence-based early childhood education consulting for public and private schools. Book a free 30-minute consultation.",
    url: "https://www.brightstarted.example.com",
    siteName: "BrightStartEd",
    images: [
      {
        url: "/educators-and-children.png",
        width: 1200,
        height: 630,
        alt: "BrightStartEd hero image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightStartEd | Early Education Consulting",
    description:
      "Evidence-based early childhood education consulting for public and private schools. Book a free 30-minute consultation.",
    images: ["/educators-twitter-card.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-white text-slate-900 antialiased",
          montserrat.variable,
          openSans.variable
        )}
      >
        <I18nProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <CookieConsent />
          <ExitIntentModal />
          <SocialProof />
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  )
}
