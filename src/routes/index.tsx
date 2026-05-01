import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CalendlyModal } from '#/components/CalendlyModal'

export const Route = createFileRoute('/')({ component: Home })

const videos = [
  { id: 'lhcc9KkQWIg', title: '3 Myths about American Community College', titleZh: '美國社區大學三大迷思' },
  { id: 'DAd6a-QFrvc', title: 'De Anza College Campus Tour', titleZh: 'De Anza 大學校園導覽 Campus tour' },
  { id: 'm8B8k0qboRU', title: 'Transfer to UC Berkeley', titleZh: '從加州社大轉入名校' },
  { id: 'I5JI4RFdtEc', title: 'UC Berkeley Admission Evaluator', titleZh: '柏克萊大學入學評審專訪' },
  { id: 'LEE_pXjpZWo', title: 'UC Berkeley Campus Tour', titleZh: '加州柏克萊大學導覽' },
]

function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream-alt to-cream px-4 py-20 sm:py-32">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-gold/8" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/6" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-gold/5" />

        <div className="page-wrap relative flex flex-col-reverse items-center gap-14 sm:flex-row sm:items-center sm:gap-16">

          {/* Left: text */}
          <div className="flex-1 text-center sm:text-left rise-in">
            <span className="inline-block mb-5 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-deep">
              矽谷留學陪跑專家
            </span>
            <h1 className="font-serif text-5xl font-bold leading-tight text-ink sm:text-6xl mb-6">
              每一步，<br />都有我陪你
            </h1>
            <p className="text-ink-soft text-lg leading-9 mb-10 max-w-lg mx-auto sm:mx-0">
              從台灣到矽谷，協助申請 De Anza College、簽證辦理、機場接機，到入美後 3 個月全方位生活陪伴。
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gold-deep hover:-translate-y-0.5 border-0 cursor-pointer"
              >
                預約免費諮詢
              </button>
              <Link
                to="/services"
                className="rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-gold no-underline transition hover:bg-gold hover:text-white hover:border-gold inline-block"
              >
                了解服務內容
              </Link>
            </div>
          </div>

          {/* Right: logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {/* Outer glow */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/25 to-transparent blur-2xl scale-110" />
              {/* Ring + card */}
              <div className="relative rounded-full bg-white/80 p-6 shadow-2xl ring-1 ring-gold/30 backdrop-blur-sm sm:p-8">
                <img
                  src="/logo-hero.svg"
                  alt="FirstWalkUS 初行"
                  className="w-56 h-56 sm:w-72 sm:h-72 object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Videos */}
      <section className="page-wrap px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-ink text-center">精選影片</h2>
        <span className="mx-auto mt-2 block h-0.5 w-10 rounded-full bg-gold" />
        <p className="mt-4 mb-10 text-center text-sm text-ink-soft">請開啟 CC 字幕以顯示繁體中文</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {videos.map(({ id, title, titleZh }) => (
            <div key={id} className="group">
              <div className="overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="font-serif font-bold text-ink text-lg">{titleZh}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink">我能陪你走的路</h2>
        <span className="mx-auto mt-2 mb-10 block h-0.5 w-10 rounded-full bg-gold" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: '🧭', title: '申請與時間表規劃', desc: '協助學生與家長了解De Anza College 申請流程、重要日期、文件準備與來美安排，讓每一步都知道該在什麼時候完成。' },
            { icon: '🌱', title: '選課與開學準備', desc: '協助學生了解第一學期選課、英文數學程度評估、學校輔導員預約與初步教育計畫，把開學第一步走穩，不是一到美國才慌張摸索。' },
            { icon: '🏔️', title: '落地與持續陪伴', desc: '抵達美國後，從接機、銀行開戶、電話卡、校園導覽到生活採買，陪學生熟悉環境；並透過每週關心與生活陪伴，用學長姐經驗陪孩子適應美國生活與學習節奏。' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream-alt bg-white text-2xl shadow-sm">
                {icon}
              </div>
              <p className="font-serif font-bold text-ink">{title}</p>
              <p className="text-sm text-ink-soft leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-cream-alt py-16 px-4">
        <div className="page-wrap flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">關於我</p>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">陪伴，是我熱愛的事</h2>
            <p className="text-sm text-ink-soft leading-7 mb-6 max-w-md">
              我相信，每個人都有屬於自己的節奏與時區。我在這裡，陪你釐清方向、勇越挑戰，走出屬於你的這條路。
            </p>
            <Link
              to="/about"
              className="rounded-full border border-gold px-6 py-2.5 text-sm font-semibold text-gold no-underline transition hover:bg-gold hover:text-white inline-block"
            >
              了解更多
            </Link>
          </div>
          <div className="h-56 w-56 flex-shrink-0 rounded-full overflow-hidden bg-gold/20 mx-auto sm:mx-0">
            <img src="/1.jpg" alt="Alice" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink">服務項目</h2>
        <span className="mx-auto mt-2 mb-10 block h-0.5 w-10 rounded-full bg-gold" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: '🎓',
              title: '核心服務套餐',
              desc: '申請 De Anza、簽證辦理、機場接機、住宿安排，及入美 3 個月全方位生活支援。',
            },
            {
              icon: '📅',
              title: '延伸月費方案',
              desc: '3 個月後仍需支援？每月方案包含每週 check-in、採購陪同及緊急聯絡人服務。',
            },
            {
              icon: '✨',
              title: '加購服務',
              desc: '買車協助、駕照訓練、轉學申請指導、校外租房協助，依需求量身安排。',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm text-left flex flex-col">
              <span className="text-2xl mb-3">{icon}</span>
              <p className="font-serif font-bold text-ink mb-3">{title}</p>
              <p className="text-sm text-ink-soft leading-6 mb-4 flex-1">{desc}</p>
              <Link to="/services" className="text-sm font-semibold text-gold no-underline hover:text-gold-deep">
                了解更多 →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream-alt py-14 px-4 text-center">
        <p className="font-serif text-xl text-ink max-w-lg mx-auto leading-9">
          「孩子剛到美國時，最需要的不是自己硬撐，<br />而是有一位熟悉當地的人，在旁邊陪他一步步適應。」
        </p>
        <p className="mt-4 text-sm text-ink-soft">— 給家長的一句話</p>
      </section>

      {/* CTA */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink mb-2">準備好讓孩子安心走進美國生活了嗎？</h2>
        <p className="text-sm text-ink-soft mb-8">從申請準備到抵達後適應，我陪孩子把第一步走穩。</p>
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white transition hover:bg-gold-deep hover:-translate-y-0.5 border-0 cursor-pointer"
        >
          預約免費諮詢
        </button>
      </section>

      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
