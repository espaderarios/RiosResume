const particles = Array.from({ length: 20 }, (_, index) => ({
  top: `${(index * 13) % 100}%`,
  left: `${(index * 29) % 100}%`,
  duration: `${3 + (index % 5)}s`,
  delay: `${(index % 4) * 0.4}s`,
  value: index % 2 === 0 ? '1010' : '0101',
}))

export default function ElectronicsEngineeringAnimation() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.15),transparent_60%)]" />

      {/* Floating Circuit Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.15)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Rotating Electronics Core */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Outer Ring */}
          <div className="absolute w-72 h-72 border border-cyan-400/30 rounded-full animate-spin [animation-duration:15s]" />

          {/* Middle Ring */}
          <div className="absolute w-56 h-56 border border-emerald-400/40 rounded-full animate-spin [animation-direction:reverse] [animation-duration:10s]" />

          {/* Pulsing Core */}
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,200,0.6)] animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3v2.25m4.5-2.25v2.25M9 18.75v2.25m6-2.25v2.25M3 9.75h2.25m13.5 0H21M3 14.25h2.25m13.5 0H21M7.5 6.75h9A1.5 1.5 0 0118 8.25v7.5A1.5 1.5 0 0116.5 17.25h-9A1.5 1.5 0 016 15.75v-7.5A1.5 1.5 0 017.5 6.75z"
              />
            </svg>
          </div>

          {/* Orbiting Nodes */}
          <div className="absolute w-[420px] h-[420px] animate-spin [animation-duration:18s]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)]" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,1)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,1)]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent animate-pulse">
          ELECTRONICS
          <br />
          ENGINEERING
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Designing intelligent systems, embedded technologies, and futuristic electronic innovations.
        </p>

        {/* Animated Tech Lines */}
        <div className="mt-16 flex items-center justify-center gap-6 flex-wrap">
          {[
            'Microcontrollers',
            'Embedded Systems',
            'Circuit Design',
            'IoT',
            'Signal Processing',
          ].map((item, index) => (
            <div
              key={index}
              className="relative px-5 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl overflow-hidden group"
            >
              <span className="relative z-10 text-sm tracking-wide text-cyan-100">
                {item}
              </span>

              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/30 text-xs animate-bounce"
            style={{
              top: particle.top,
              left: particle.left,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          >
            {particle.value}
          </div>
        ))}
      </div>
    </div>
  )
}