"use client"

import { useState } from "react"

export default function CalendarEmbed({
  provider = "calcom",
  url = "https://cal.com/your-handle/30min",
}: {
  provider?: "calcom" | "calendly"
  url?: string
} = {}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div>
      <div className="relative h-[720px] w-full overflow-hidden rounded-md border bg-white">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div aria-label="Loading calendar..." className="text-sm text-slate-600">
              Loading calendar...
            </div>
          </div>
        )}
        <iframe
          title="Book a consultation"
          src={provider === "calcom" ? url : "https://calendly.com/your-org/30min"}
          className="h-full w-full"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        If the calendar doesn&apos;t load,{" "}
        <a className="underline" href={url} target="_blank" rel="noreferrer">
          open it in a new tab
        </a>
        .
      </p>
    </div>
  )
}
