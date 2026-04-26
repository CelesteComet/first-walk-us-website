import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap grid gap-8 sm:grid-cols-3">
        <div>
          <p className="mb-2 text-sm font-bold text-[var(--sea-ink)]">First Walk US</p>
          <p className="m-0 text-sm leading-6">
            Helping Taiwan students take their first step into American higher education — starting
            at De Anza College, Silicon Valley.
          </p>
          <p className="mt-2 text-xs text-[var(--kicker)]">走入美國的第一步</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-[var(--sea-ink)]">Quick Links</p>
          <ul className="m-0 list-none space-y-1.5 p-0 text-sm">
            {[
              ['/', 'Home'],
              ['/services', 'Our Services'],
              ['/about', 'About Us'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as '/'}  className="text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-[var(--sea-ink)]">Contact</p>
          <ul className="m-0 list-none space-y-1.5 p-0 text-sm">
            <li>
              <a href="mailto:hello@firstwalkus.com" className="text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)]">
                hello@firstwalkus.com
              </a>
            </li>
            <li className="text-[var(--sea-ink-soft)]">LINE: @firstwalkus</li>
            <li className="text-[var(--sea-ink-soft)]">
              De Anza College, Cupertino, CA
            </li>
          </ul>
        </div>
      </div>

      <div className="page-wrap mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-xs">&copy; {year} First Walk US. All rights reserved.</p>
        <p className="island-kicker m-0 text-xs">
          De Anza College · Cupertino, California
        </p>
      </div>
    </footer>
  )
}
