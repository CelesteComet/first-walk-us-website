import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-cream/95 backdrop-blur-md px-4">
      <nav className="page-wrap flex items-center gap-6 py-4">
        <Link to="/" className="flex-shrink-0 no-underline">
          <img src="/logo.svg" alt="FirstWalkUS" className="h-10 w-auto" />
        </Link>

        <div className="hidden sm:flex items-center gap-6 ml-8">
          <Link to="/" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>首頁</Link>
          <Link to="/about" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>關於我</Link>
          <Link to="/services" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>服務項目</Link>
          <Link to="/contact" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>聯絡我</Link>
        </div>

        <div className="ml-auto">
          <Link
            to="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep"
          >
            預約免費諮詢
          </Link>
        </div>
      </nav>
    </header>
  )
}
