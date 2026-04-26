import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/10 bg-cream-alt px-4 pb-10 pt-12 text-ink-soft">
      <div className="page-wrap grid gap-8 sm:grid-cols-3">
        <div>
          <p className="mb-2 font-serif font-bold text-ink">初行 FirstWalkUS</p>
          <p className="m-0 text-sm leading-6">陪你探索方向，建立信心，一步步走向理想的未來。</p>
        </div>
        <div>
          <p className="mb-2 text-sm font-bold text-ink">頁面連結</p>
          <ul className="m-0 list-none space-y-1.5 p-0 text-sm">
            {[['/', '首頁'], ['/about', '關於我'], ['/services', '服務項目'], ['/contact', '聯絡我']].map(([to, label]) => (
              <li key={to}><Link to={to as '/'} className="text-ink-soft no-underline hover:text-ink">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-sm font-bold text-ink">聯絡方式</p>
          <ul className="m-0 list-none space-y-1.5 p-0 text-sm">
            <li><a href="mailto:firstwalkus@gmail.com" className="text-ink-soft no-underline hover:text-ink">firstwalkus@gmail.com</a></li>
            <li><a href="https://www.instagram.com/firstwalkus/" target="_blank" rel="noopener noreferrer" className="text-ink-soft no-underline hover:text-ink">Instagram: @firstwalkus</a></li>
          </ul>
        </div>
      </div>
      <div className="page-wrap mt-10 border-t border-black/10 pt-6 text-center text-xs">
        &copy; {year} First Walk US. All rights reserved.
      </div>
    </footer>
  )
}
