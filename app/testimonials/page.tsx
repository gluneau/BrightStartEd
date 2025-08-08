import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Testimonials & Case Studies | BrightStartEd",
  description:
    "Read impact stories from schools we partner with: before/after data, success metrics, and ROI.",
}

export default function TestimonialsPage() {
  const cases = [
    {
      title: "Maple Ridge School District",
      before: "Baseline readiness at 62%. Limited classroom centers and inconsistent routines.",
      after: "Readiness reached 81% within two semesters. Teachers implemented center rotations and language-rich routines.",
      metrics: ["#43;19% readiness", "90% teacher PD satisfaction", "Audit passed with commendations"],
      logo: "/placeholder.svg?height=64&width=160",
    },
    {
      title: "Little Oaks Academy",
      before: "Compliance documentation lagging and teacher turnover impacting quality.",
      after: "Clear procedures, onboarding PD, and coaching reduced turnover and improved compliance.",
      metrics: ["100% compliance artifacts complete", "Turnover down 12%", "Family satisfaction up 15%"],
      logo: "/placeholder.svg?height=64&width=160",
    },
  ]
  const testimonials = [
    { quote: "The coaching cycles were a game-changer for our team.", name: "Principal, MRSD" },
    { quote: "We saw measurable gains in student readiness and teacher confidence.", name: "Director, LOA" },
    { quote: "The audit was our smoothest yet thanks to BrightStartEd.", name: "Coordinator, NVSD" },
  ]
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Testimonials & Case Studies</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {cases.map((c, i) => (
          <Card key={i} className="border-slate-200">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Image src={c.logo || "/placeholder.svg"} alt={c.title + " logo"} width={140} height={56} className="h-10 w-auto object-contain" />
                <div className="font-semibold">{c.title}</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Before</div>
                <p className="text-slate-700">{c.before}</p>
              </div>
              <div className="text-sm">
                <div className="font-semibold">After</div>
                <p className="text-slate-700">{c.after}</p>
              </div>
              <ul className="list-disc pl-5 text-sm text-slate-700">
                {c.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p>{"“" + t.quote + "”"}</p>
              <div className="mt-3 text-sm text-slate-600">{t.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
