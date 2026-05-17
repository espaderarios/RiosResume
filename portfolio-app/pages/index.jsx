import Head from 'next/head'
import Hero from '../src/components/sections/Hero'
import Projects from '../src/components/sections/Projects'
import Skills from '../src/components/sections/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rosario V. Espadera — Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#f3f6f9] p-6">
        <div className="mx-auto max-w-5xl">
          <Hero />
          <section className="mt-8">
            <Projects />
          </section>
          <section className="mt-8">
            <Skills />
          </section>
        </div>
      </main>
    </>
  )
}
