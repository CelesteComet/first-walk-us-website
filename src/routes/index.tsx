import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CalendlyModal } from '#/components/CalendlyModal'

export const Route = createFileRoute('/')({ component: Home })

const videos = [
  { id: 'lhcc9KkQWIg', title: '3 Myths about American Community College', titleZh: '美國社區大學三大迷思' },
  { id: 'DAd6a-QFrvc', title: 'De Anza College Campus Tour', titleZh: 'De Anza College 校園導覽' },
  { id: 'm8B8k0qboRU', title: 'Transfer to UC Berkeley', titleZh: '從加州社大轉入名校' },
  { id: 'I5JI4RFdtEc', title: 'UC Berkeley Admission Evaluator', titleZh: '柏克萊大學入學評審專訪' },
  { id: 'LEE_pXjpZWo', title: 'UC Berkeley Campus Tour', titleZh: '加州柏克萊大學導覽' },
]

function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      {/* Hero */}
      <section className="px-4 py-8 sm:py-16">
        <div className="page-wrap">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row lg:items-stretch lg:min-h-[640px]">
            
            {/* Left: Image */}
            <div className="relative h-72 sm:h-96 lg:h-auto lg:w-1/2 overflow-hidden">
              <img
                src="/young_girl_deanza.png"
                alt="De Anza College 學生"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 hover:scale-105"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-ink/5 pointer-events-none" />
              {/* Desktop side fade */}
              <div
                className="absolute inset-y-0 right-0 z-10 w-32 pointer-events-none hidden lg:block"
                style={{ background: 'linear-gradient(to left, var(--color-cream) 0%, transparent 100%)' }}
              />
              {/* Mobile bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none lg:hidden"
                style={{ background: 'linear-gradient(to top, var(--color-cream) 0%, transparent 100%)' }}
              />
            </div>

            {/* Right: Content */}
            <div className="relative z-20 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-20 lg:flex-1 rise-in">
              <div className="mb-8 inline-flex items-center self-start rounded-full bg-gold/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-deep ring-1 ring-gold/20">
                矽谷留學陪跑專家
              </div>
              
              <h1 className="font-serif text-3xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-[3.8rem] mb-8 tracking-tighter">
                <span className="block lg:whitespace-nowrap">留學美國的第一步，</span>
                <span className="block text-gold">我陪你走穩。</span>
              </h1>
              
              <p className="text-ink-soft text-lg sm:text-xl leading-relaxed mb-12 max-w-lg opacity-90">
                從台灣到矽谷，我們協助你處理申請、簽證與接機，並在抵達後提供全方位陪伴，讓你的留學生活有個完美的開始。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  className="rounded-full bg-gold px-12 py-5 text-center text-lg font-bold text-white shadow-[0_10px_20px_rgba(215,167,122,0.25)] transition-all hover:bg-gold-deep hover:shadow-[0_15px_30px_rgba(215,167,122,0.35)] hover:-translate-y-1 active:scale-95 no-underline"
                >
                  預約免費諮詢
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border-2 border-gold/20 px-12 py-5 text-center text-lg font-bold text-gold transition-all hover:bg-white hover:border-gold hover:shadow-sm active:scale-95 no-underline"
                >
                  了解服務內容
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-[#FAF9F6] py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-6 tracking-tight">精選影片分享</h2>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-gold mb-8" />
            <p className="text-lg sm:text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
              透過學長姐的鏡頭，帶你直擊 De Anza College 校園生活與 UC 轉學秘辛。<br className="hidden sm:block" />
              <span className="text-gold font-bold">※ 請開啟 YouTube CC 字幕以顯示繁體中文</span>
            </p>
          </div>

          <div className="space-y-12">
            {/* Featured Video: Full Width */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[0].id}`}
                      title={videos[0].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-center bg-white">
                  <div className="mb-4 inline-flex items-center self-start rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-deep">
                    熱門推薦
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ink mb-4 leading-tight">{videos[0].titleZh}</h3>
                  <p className="text-ink-soft text-base sm:text-lg leading-relaxed">{videos[0].title}</p>
                </div>
              </div>
            </div>

            {/* Others Grid: 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {videos.slice(1).map(({ id, title, titleZh }) => (
                <div key={id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif font-bold text-ink text-xl mb-2 group-hover:text-gold transition-colors">{titleZh}</h4>
                    <p className="text-ink-soft text-xs tracking-wide uppercase opacity-80">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              <p className="font-serif font-bold text-ink text-lg">{title}</p>
              <p className="text-base text-ink-soft leading-8">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-cream-alt py-16 px-4">
        <div className="page-wrap flex flex-col gap-10 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">關於我</p>
            <h2 className="font-serif text-3xl font-bold text-ink mb-6">我走過這條路，所以懂第一步有多重要</h2>
            <p className="text-base text-ink-soft leading-8 mb-8 max-w-lg">
              我是 Alice，曾經從 De Anza College 轉學到 UC Berkeley。因為自己也走過社區大學到 UC 轉學這條路，我了解學生剛來美國時，面對的不只是申請與選課，還有語言、生活、交通、住宿、銀行開戶，以及心理上的不安。<br /><br />
              現在我住在 Cupertino，離 De Anza 很近。我希望用自己的在地經驗與學長姐經驗，陪台灣學生把來美國的第一步走穩，也讓家長在遠方多一份安心。
            </p>
            <Link
              to="/about"
              className="rounded-full border border-gold px-8 py-3 text-base font-semibold text-gold no-underline transition hover:bg-gold hover:text-white inline-block"
            >
              了解 Alice 的故事
            </Link>
          </div>
          <div className="h-64 w-64 flex-shrink-0 rounded-full overflow-hidden bg-gold/20 mx-auto sm:mx-0 shadow-xl">
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
            <div key={title} className="rounded-2xl bg-white p-8 shadow-sm text-left flex flex-col">
              <span className="text-3xl mb-4">{icon}</span>
              <p className="font-serif font-bold text-ink text-lg mb-4">{title}</p>
              <p className="text-base text-ink-soft leading-7 mb-6 flex-1">{desc}</p>
              <Link to="/services" className="text-sm font-semibold text-gold no-underline hover:text-gold-deep">
                了解更多 →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream-alt py-16 px-4 text-center">
        <p className="font-serif text-2xl text-ink max-w-2xl mx-auto leading-relaxed">
          「孩子剛到美國時，最需要的不是自己硬撐，<br />而是有一位熟悉當地的人，在旁邊陪他一步步適應。」
        </p>
        <p className="mt-6 text-base text-ink-soft">— 給家長的一句話</p>
      </section>

      {/* CTA */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-3xl font-bold text-ink mb-3">準備好讓孩子安心走進美國生活了嗎？</h2>
        <p className="text-lg text-ink-soft mb-10">從申請準備到抵達後適應，我陪孩子把第一步走穩。</p>
        <Link
          to="/contact"
          className="rounded-full bg-gold px-10 py-4 text-base font-semibold text-white no-underline transition hover:bg-gold-deep hover:-translate-y-0.5 inline-block"
        >
          預約免費諮詢
        </Link>
      </section>

      <CalendlyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
