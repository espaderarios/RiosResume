import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="h-px bg-gray-200 my-4" />
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="px-3 py-1 rounded-full bg-[#f1f6fb] text-sm text-cvNavy border border-cvNavy/10">{s}</span>
        ))}
      </div>
    </section>
  )
}
