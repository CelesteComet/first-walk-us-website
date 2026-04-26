import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
        <p className="island-kicker mb-3">For Taiwan Students</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          Your Gateway to De Anza College.
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          We guide Taiwan students through every step of applying to De Anza College in Cupertino, California — in the heart of Silicon Valley.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-6 py-3 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Free Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-6 py-3 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5"
          >
            Our Services
          </Link>
        </div>
      </section>
    </main>
  )
}
