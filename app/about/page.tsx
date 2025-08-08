import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | BrightStartEd",
  description:
    "Our mission, vision, team, and methodology for improving early childhood readiness outcomes.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Jordan Lee, M.Ed.",
      role: "Founder & Lead Consultant",
      img: "/founder-portrait.png",
      bio: "15 years in Pre‑K leadership, former district ECE director, specialist in curriculum design and data cycles.",
    },
    {
      name: "Priya Desai",
      role: "Senior Instructional Coach",
      img: "/coach-portrait.png",
      bio: "Classroom setup, coaching cycles, and teacher PD facilitation focused on developmentally appropriate practice.",
    },
  ]
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Mission & Vision</h1>
          <p className="text-slate-700">
            Our mission is to help schools build joyful, effective Pre‑K programs that set children up for lifelong learning. We envision equitable access to developmentally appropriate, evidence-based early education in every community.
          </p>
          <h2 className="text-2xl font-semibold">Our Methodology</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Evidence-based frameworks tied to early learning standards</li>
            <li>Coaching cycles and PD that translate into classroom practice</li>
            <li>Data reviews and progress monitoring for measurable outcomes</li>
            <li>Compliance-aligned procedures and documentation</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-3xl font-bold text-[#2E7D32]">95%</div>
                <div className="text-sm text-slate-600">Readiness improvement rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-3xl font-bold text-[#FFA726]">20+#43;</div>
                <div className="text-sm text-slate-600">Years combined Pre‑K expertise</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Image
            src="/team-collaboration.png"
            alt="BrightStartEd team collaborating"
            width={720}
            height={480}
            className="rounded-xl border object-cover w-full h-auto"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {team.map((m, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex gap-4">
                  <Image
                    src={m.img || "/placeholder.svg"}
                    alt={m.name + " portrait"}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-slate-600">{m.role}</div>
                    <p className="mt-2 text-sm text-slate-700">{m.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Accreditations & Partners</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center rounded-md border p-4 bg-white">
                  <Image
                    src="/accreditation-badge.png"
                    alt={"Accreditation badge " + (i + 1)}
                    width={160}
                    height={64}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
