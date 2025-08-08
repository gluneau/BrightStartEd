"use client"

import Image from "next/image"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitLeadCapture } from "@/app/server-actions"
import { useToast } from "@/hooks/use-toast"

const articles = [
  {
    title: "Designing Developmentally Appropriate Centers",
    excerpt: "A practical guide to setting up centers that foster exploratory learning in Pre‑K.",
    image: "/diverse-learning-center.png",
  },
  {
    title: "Using Data Cycles to Boost Readiness",
    excerpt: "How to collect, review, and act on classroom data without overwhelming teachers.",
    image: "/data-review-process.png",
  },
  {
    title: "Compliance Checklist: Be Audit‑Ready",
    excerpt: "Documentation and routines to align with early childhood regulations.",
    image: "/placeholder.svg?height=240&width=400",
  },
]

export default function ResourcesClientPage() {
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = () => {
    const formData = new FormData()
    formData.set("name", name)
    formData.set("email", email)
    formData.set("resource", "prek-readiness-checklist")
    startTransition(async () => {
      const res = await submitLeadCapture(formData)
      if (res?.ok) {
        toast({ title: "Download ready", description: "Your guide is starting to download." })
        // trigger download
        const a = document.createElement("a")
        a.href = res.url
        a.download = "prek-readiness-checklist.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
        setOpen(false)
      } else {
        toast({ title: "Something went wrong", description: res?.message || "Please try again.", variant: "destructive" })
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Resources & Blog</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((a, i) => (
              <Card key={i} className="overflow-hidden">
                <Image src={a.image || "/placeholder.svg"} alt={a.title} width={400} height={240} className="h-44 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl">{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{a.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Free Download: Pre‑K Readiness Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">
                Get our checklist used by schools to prepare classrooms and coaching cycles. Enter your email to download.
              </p>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#2E7D32] hover:bg-[#256428] w-full">Get the Checklist</Button>
                </DialogTrigger>
                <DialogContent aria-describedby="lead-capture-desc">
                  <DialogHeader>
                    <DialogTitle>Access your free guide</DialogTitle>
                    <DialogDescription id="lead-capture-desc">
                      We&apos;ll email you the PDF and occasional resources. Unsubscribe anytime.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@school.edu" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSubmit} disabled={pending} className="bg-[#2E7D32] hover:bg-[#256428]">
                      {pending ? "Preparing..." : "Email me the PDF"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Webinars</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium">Play‑Based Learning That Works</div>
                <div className="text-xs text-slate-600">Sept 12, 1:00 PM ET</div>
              </div>
              <div>
                <div className="font-medium">Audit‑Ready: ECE Compliance</div>
                <div className="text-xs text-slate-600">Oct 3, 3:00 PM ET</div>
              </div>
              <div className="text-xs text-slate-500">Subscribe to our newsletter to be notified.</div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
