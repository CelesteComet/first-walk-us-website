import { createFileRoute } from '@tanstack/react-router'
import { Instagram, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  return (
    <main className="page-wrap px-4 py-16">
      <div className="mx-auto max-w-xl text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">聯絡我</p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-4">開始你的第一步</h1>
        <p className="text-sm leading-7 text-ink-soft">預約 30 分鐘免費諮詢，中英文皆可。</p>
      </div>
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <ul className="list-none space-y-4 p-0 text-sm text-ink-soft">
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-gold shrink-0" />
            <a href="mailto:firstwalkus@gmail.com" className="text-ink-soft no-underline hover:text-ink">firstwalkus@gmail.com</a>
          </li>
          <li className="flex items-center gap-3">
            <Instagram size={16} className="text-gold shrink-0" />
            <a href="https://www.instagram.com/firstwalkus" className="text-ink-soft no-underline hover:text-ink">Instagram: @firstwalkus</a>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <a
            href="mailto:firstwalkus@gmail.com"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep inline-block"
          >
            發送郵件
          </a>
        </div>
      </div>
    </main>
  )
}
