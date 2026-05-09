import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream/70">
      <div className="page-wrap px-4 py-16 grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="font-serif text-lg font-bold text-cream">初行 FirstWalkUS</p>
          <p className="text-sm leading-7">
            陪台灣學生走穩到美國的第一步，從 De Anza 申請到矽谷生活適應，一路有人在旁邊。
          </p>
          <a
            href="https://www.instagram.com/firstwalkus/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 text-sm text-gold no-underline hover:text-gold-deep transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @firstwalkus
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">頁面連結</p>
          <ul className="m-0 list-none space-y-2.5 p-0 text-sm">
            {[['/', '首頁'], ['/about', '關於 Alice'], ['/services', '服務項目'], ['/contact', '聯絡我']].map(([to, label]) => (
              <li key={to}>
                <Link to={to as '/'} className="text-cream/70 no-underline hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">聯絡方式</p>
          <ul className="m-0 list-none space-y-2.5 p-0 text-sm">
            <li>
              <a href="mailto:firstwalkus@gmail.com" className="text-cream/70 no-underline hover:text-cream transition-colors break-all">
                firstwalkus@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/firstwalkus/" target="_blank" rel="noopener noreferrer" className="text-cream/70 no-underline hover:text-cream transition-colors">
                Instagram: @firstwalkus
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-wrap px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <span>&copy; {year} First Walk US. All rights reserved.</span>
          <span>Made with ♥ in Cupertino, CA</span>
        </div>
      </div>
    </footer>
  )
}
