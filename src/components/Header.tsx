import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { CalendlyModal } from './CalendlyModal'

const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我' },
  { to: '/services', label: '服務項目' },
  { to: '/blog', label: '部落格' },
  { to: '/contact', label: '聯絡我' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-black/10 bg-cream/95 backdrop-blur-md">
      <nav className="page-wrap flex items-center gap-6 px-4 py-4">
        <Link to="/" className="flex-shrink-0 no-underline" onClick={() => setOpen(false)}>
          <img
            src="/justicon_firstwalkus_logo.png"
            alt="FirstWalkUS"
            className="h-10 w-auto"
            width={160}
            height={160}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 ml-4">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep"
            onClick={() => setOpen(false)}
          >
            預約免費諮詢
          </Link>

          {/* Hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? '關閉選單' : '開啟選單'}
          >
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-black/10 bg-cream/95 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink no-underline hover:bg-cream-alt"
                activeProps={{ className: 'rounded-xl px-4 py-3 text-sm font-semibold text-gold no-underline bg-cream-alt' }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white no-underline transition hover:bg-gold-deep"
              onClick={() => setOpen(false)}
            >
              預約免費諮詢
            </Link>
          </div>
        </div>
      )}
    </header>
    <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
