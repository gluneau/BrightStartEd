import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react'

export default function TrustBadges({}: Record<string, never> = {}) {
  const items = [
    { icon: ShieldCheck, label: "ECE Compliance Aligned" },
    { icon: Award, label: "Award‑Winning PD" },
    { icon: CheckCircle2, label: "Evidence‑Based Methods" },
  ]
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      {items.map(({ icon: Icon, label }, i) => (
        <div key={i} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          <Icon className="h-4 w-4 text-[#2E7D32]" aria-hidden="true" />
          <span className="text-slate-700">{label}</span>
        </div>
      ))}
    </div>
  )
}
