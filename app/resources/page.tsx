import type { Metadata } from "next"
import ResourcesClientPage from "./client-page"

export const metadata: Metadata = {
title: "Resources & Blog | BrightStartEd",
description:
  "Articles, checklists, and upcoming webinars for early childhood educators and school leaders.",
}

export default function ResourcesPage() {
return <ResourcesClientPage />
}
