import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Services</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Full-service application support.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          From CCCApply to your F-1 visa, we handle every document and deadline so you can focus on your future at De Anza College.
        </p>
      </section>
    </main>
  )
}
