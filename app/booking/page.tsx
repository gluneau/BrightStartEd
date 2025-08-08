import CalendarEmbed from "@/components/calendar-embed"

export const metadata = {
  title: "Book a Consultation | BrightStartEd",
  description:
    "Schedule a free 30-minute consultation via our embedded calendar.",
}

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Book a Free Consultation</h1>
      <p className="text-slate-700 mb-6">
        Pick a time that works for you. You&apos;ll receive a confirmation email after booking.
      </p>
      <CalendarEmbed />
    </div>
  )
}
