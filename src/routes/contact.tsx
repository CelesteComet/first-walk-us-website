import { createFileRoute } from '@tanstack/react-router'
import { Instagram, Mail, Calendar, MessageCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: '電子郵件',
      value: 'firstwalkus@gmail.com',
      href: 'mailto:firstwalkus@gmail.com',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@firstwalkus',
      href: 'https://www.instagram.com/firstwalkus',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'LINE 聯絡',
      value: '點擊加入 LINE 好友',
      href: 'https://line.me/ti/p/gRErWITJFw',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: '諮詢預約',
      value: '點擊預約 30 分鐘諮詢',
      href: 'https://calendar.app.google/1ZCsH6U8b1oAfqjY9',
    },
  ]

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-cream/30">
      {/* Header Section */}
      <div className="text-center mb-16 rise-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Contact Me</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-6">開始你的第一步</h1>
        <p className="text-lg text-ink-soft max-w-lg mx-auto leading-relaxed">
          不管是申請疑問、選課規劃或落地需求，<br className="hidden sm:block" />
          歡迎隨時與我聯絡，我會親自回覆你的訊息。
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="w-full max-w-lg space-y-5">
        {contactOptions.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group block relative no-underline transition-transform hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-cream-alt shadow-sm transition-all group-hover:shadow-md group-hover:border-gold/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm sm:text-lg font-medium text-ink leading-tight">{item.value}</p>
              </div>
              <div className="text-cream-alt transition-colors group-hover:text-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Slogan */}
      <div className="mt-20 text-center text-ink-soft opacity-60">
        <p className="font-serif text-lg">這一次，你不是一個人</p>
      </div>
    </main>
  )
}
