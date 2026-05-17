export default function Hero() {
  return (
    <header className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="uppercase tracking-widest text-sm text-slate-300">Web Developer</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROSARIO V. ESPADERA</h1>
          <p className="mt-2 text-slate-200 max-w-xl">Frontend developer focused on UI/UX, performance, and interactive web apps.</p>
          <div className="mt-4 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-cvBlue text-cvNavy font-medium">View Projects</a>
            <a href="mailto:s.rvespadera@usm.edu.ph" className="px-4 py-2 rounded-lg border border-white/20">Contact</a>
          </div>
        </div>

        <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl ring-2 ring-cvBlue/20">
          <img src="/profile/me.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  )
}
