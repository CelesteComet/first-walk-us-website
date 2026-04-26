import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main className="page-wrap px-4 py-16">

      {/* Hero */}
      <section className="rise-in mb-12 text-center">
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--line)] bg-[var(--surface-strong)] text-3xl font-bold text-[var(--lagoon-deep)] shadow-sm">
          AW
        </div>
        <p className="island-kicker mb-3">Founder</p>
        <h1 className="display-title mb-4 text-5xl font-bold text-[var(--sea-ink)] sm:text-6xl">
          Alice Wu
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-8 text-[var(--sea-ink-soft)]">
          Helping Taiwan students find their footing in Silicon Valley — one application at a time.
        </p>
      </section>

      {/* Story */}
      <section className="island-shell mx-auto mb-8 max-w-2xl rounded-2xl p-8 sm:p-10">
        <p className="island-kicker mb-4">My Story</p>
        <p className="mb-5 text-base leading-8 text-[var(--sea-ink-soft)]">
          I came to California from Taiwan not knowing anyone, with imperfect English and a stack of confusing paperwork. I figured it out — applied to De Anza College, navigated the transfer process, and made it to a top UC school.
        </p>
        <p className="text-base leading-8 text-[var(--sea-ink-soft)]">
          That experience became First Walk US. I built the guide I needed but didn't have, so the next student doesn't have to go it alone. Every service we offer is something I personally went through.
        </p>
      </section>

      {/* Stats */}
      <section className="mx-auto mb-12 grid max-w-2xl grid-cols-3 gap-4 text-center">
        {[
          { number: '50+', label: 'Students helped' },
          { number: 'UC', label: 'Transfer success' },
          { number: '5 yrs', label: 'In Silicon Valley' },
        ].map(({ number, label }) => (
          <div key={label} className="island-shell rounded-2xl px-4 py-6">
            <p className="display-title mb-1 text-3xl font-bold text-[var(--lagoon-deep)]">{number}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--sea-ink-soft)]">{label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-block rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-8 py-3 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
        >
          Book a Free Consultation
        </Link>
      </div>

    </main>
  )
}
