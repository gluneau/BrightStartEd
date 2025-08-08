export const metadata = {
  title: "Accessibility Statement | BrightStartEd",
}

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 prose prose-slate max-w-3xl">
      <h1>Accessibility Statement</h1>
      <p>
        BrightStartEd is committed to ensuring digital accessibility for people with disabilities. We aim to comply with
        WCAG 2.1 AA standards.
      </p>
      <h2>Measures to Support Accessibility</h2>
      <ul>
        <li>Semantic HTML and ARIA labels</li>
        <li>Keyboard navigability and focus states</li>
        <li>Color contrast aligned to WCAG guidelines</li>
      </ul>
      <h2>Feedback</h2>
      <p>
        If you encounter accessibility barriers, contact: access#64;brightstarted.org
      </p>
    </div>
  )
}
