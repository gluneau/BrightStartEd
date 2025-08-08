"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function RoiCalculator({}: Record<string, never> = {}) {
  const [classrooms, setClassrooms] = useState(6)
  const [students, setStudents] = useState(18)
  const [improvement, setImprovement] = useState(0.15) // 15%
  const [cost, setCost] = useState(9500) // program cost

  const results = useMemo(() => {
    const totalStudents = classrooms * students
    const studentsImproved = Math.round(totalStudents * improvement)
    const estimatedValuePerStudent = 300 // hypothetical value (e.g., reduced remediation)
    const totalValue = studentsImproved * estimatedValuePerStudent
    const roi = cost > 0 ? (totalValue - cost) / cost : 0
    return { totalStudents, studentsImproved, totalValue, roi }
  }, [classrooms, students, improvement, cost])

  return (
    <Card>
      <CardContent className="p-4 grid gap-4 md:grid-cols-2">
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="classrooms">Number of classrooms</Label>
            <Input
              id="classrooms"
              type="number"
              min={1}
              value={classrooms}
              onChange={(e) => setClassrooms(Number(e.target.value || 0))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="students">Students per classroom</Label>
            <Input
              id="students"
              type="number"
              min={1}
              value={students}
              onChange={(e) => setStudents(Number(e.target.value || 0))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="improvement">Expected readiness improvement (%)</Label>
            <Input
              id="improvement"
              type="number"
              min={0}
              max={100}
              value={Math.round(improvement * 100)}
              onChange={(e) => setImprovement(Number(e.target.value || 0) / 100)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cost">Program cost ($)</Label>
            <Input
              id="cost"
              type="number"
              min={0}
              value={cost}
              onChange={(e) => setCost(Number(e.target.value || 0))}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-sm text-slate-600">Total students</div>
          <div className="text-xl font-semibold">{results.totalStudents}</div>
          <div className="text-sm text-slate-600">Students positively impacted</div>
          <div className="text-xl font-semibold">{results.studentsImproved}</div>
          <div className="text-sm text-slate-600">Estimated value created</div>
          <div className="text-xl font-semibold">${results.totalValue.toLocaleString()}</div>
          <div className="text-sm text-slate-600">Projected ROI</div>
          <div className={"text-xl font-semibold " + (results.roi >= 0 ? "text-green-700" : "text-red-700")}>
            {(results.roi * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-slate-500">
            This calculator provides illustrative estimates. Actual results depend on implementation context.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
