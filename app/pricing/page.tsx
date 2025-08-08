import type { Metadata } from "next"
import PricingClientPage from "./client-page"

export const metadata: Metadata = {
title: "Pricing & ROI | BrightStartEd",
description:
  "Transparent pricing guidance and ROI calculator. Contact us for a tailored proposal.",
}

export default function PricingPage() {
return <PricingClientPage />
}
