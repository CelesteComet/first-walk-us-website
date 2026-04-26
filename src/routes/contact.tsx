import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Contact</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Get in touch.
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Book a free 30-minute consultation in Mandarin or English.
        </p>
        <ul className="mt-4 list-none space-y-2 p-0 text-sm text-[var(--sea-ink-soft)]">
          <li>Email: <a href="mailto:firstwalkus@gmail.com">firstwalkus@gmail.com</a></li>
          <li>LINE: @firstwalkus</li>
        </ul>
      </section>
    </main>
  )
}
