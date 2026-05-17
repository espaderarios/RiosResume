import Link from 'next/link'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <div className="h-px bg-gray-200 my-4" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`rounded-xl border p-4 transition ${p.featured ? 'border-cyan-400/60 bg-cyan-50 shadow-lg shadow-cyan-100' : 'hover:shadow-lg'}`}
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
              ))}
            </div>
            {p.link !== '#' ? (
              <div className="mt-4">
                <Link
                  href={p.link}
                  className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${p.featured ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200 hover:bg-cyan-400' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
                >
                  {p.ctaLabel || 'View Project'}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
