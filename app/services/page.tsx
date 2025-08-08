import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Services | BrightStartEd",
  description:
    "Curriculum design, professional development, compliance support, classroom setup, and readiness assessments.",
}

const services = [
  {
    slug: "curriculum",
    title: "Curriculum Design & Evaluation",
    desc:
      "Align to early learning standards with developmentally appropriate, evidence-based content. Ongoing evaluation ensures continuous improvement.",
    outcomes: [
      "Standards-aligned units and assessments",
      "Increased student engagement",
      "Teacher-ready materials and pacing",
    ],
    investment: "Contact for quote",
    image: "/placeholder-grxup.png",
  },
  {
    slug: "pd",
    title: "Professional Development Workshops",
    desc:
      "Hands-on PD that translates into classroom practice: centers, play-based learning, language-rich routines, and more.",
    outcomes: [
      "Practice-based teacher skill growth",
      "Improved classroom routines and interactions",
      "Sustained coaching & follow-up",
    ],
    investment: "Packages from $2,500",
    image: "/teacher-training-session.png",
  },
  {
    slug: "compliance",
    title: "Compliance with State/Federal Standards",
    desc:
      "Documentation, procedures, and audits aligned with early childhood regulations for peace of mind before reviews.",
    outcomes: [
      "Clear documentation templates",
      "Audit preparation and support",
      "Reduced compliance risk",
    ],
    investment: "Contact for quote",
    image: "/compliance-documents.png",
  },
  {
    slug: "classroom",
    title: "Classroom Setup & Materials Guidance",
    desc:
      "Design purposeful learning environments with the right centers, materials, and traffic flow for young learners.",
    outcomes: [
      "Optimized classroom layouts",
      "Developmentally appropriate materials",
      "Improved transitions and safety",
    ],
    investment: "From $1,800 per classroom",
    image: "/prek-classroom.png",
  },
  {
    slug: "assessments",
    title: "Readiness Assessments & Data Analysis",
    desc:
      "Screeners, observations, and data reviews that inform teaching and show measurable progress over time.",
    outcomes: [
      "Actionable data dashboards",
      "Targeted interventions",
      "Stakeholder-ready reports",
    ],
    investment: "From $4,000 per cohort",
    image: "/data-analysis-dashboard.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-slate-700 mb-10">
        We collaborate with leaders and teachers to design and implement joyful, effective Pre‑K programs. Explore our core offerings below. Each service can be customized to your context.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.slug} className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <Image
                src={s.image || "/placeholder.svg"}
                alt={s.title}
                width={480}
                height={320}
                className="h-full w-full object-cover"
              />
              <div>
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">{s.desc}</p>
                  <div>
                    <div className="text-sm font-semibold">Outcomes</div>
                    <ul className="list-disc pl-5 text-sm text-slate-700">
                      {s.outcomes.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-slate-600">
                      <span className="font-semibold">Investment: </span>
                      {s.investment}
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/contact?service=" aria-label={"Contact about " + s.title}>
                        Contact for Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button className="bg-[#2E7D32] hover:bg-[#256428]" asChild>
          <Link href="/booking">Book a Free Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
