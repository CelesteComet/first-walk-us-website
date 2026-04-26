import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const videos = [
  { id: 'LEE_pXjpZWo', title: 'UC Berkeley Campus Tour' },
  { id: 'DAd6a-QFrvc', title: 'Community College Myths' },
  { id: 'I5JI4RFdtEc', title: 'De Anza College Campus Tour' },
  { id: 'm8B8k0qboRU', title: 'Transfer to UC Berkeley' },
]

function Home() {
  return (
    <main className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream-alt to-cream px-4 py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gold/8" />

        <div className="page-wrap relative flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-16">
          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            {/* Small logo mark */}
            <img src="/logo.jpeg" alt="FirstWalkUS" className="h-12 w-auto mx-auto sm:mx-0 mb-5 object-contain" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">矽谷留學陪跑專家</p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-ink sm:text-6xl mb-5">
              每一步，<br />都有我陪你
            </h1>
            <p className="text-ink-soft text-base leading-8 mb-8 max-w-sm mx-auto sm:mx-0">
              從台灣到矽谷，協助申請 De Anza College、簽證辦理、機場接機，到入美後 3 個月全方位生活陪伴。
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-10">
              <Link
                to="/contact"
                className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep hover:-translate-y-0.5 inline-block"
              >
                預約免費諮詢
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-gold px-7 py-3 text-sm font-semibold text-gold no-underline transition hover:bg-gold hover:text-white inline-block"
              >
                了解服務內容
              </Link>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {['✈️ 機場接機', '🎓 申請指導', '🏠 住宿安排', '💬 3 個月陪伴'].map(tag => (
                <span key={tag} className="rounded-full bg-white border border-cream-alt px-4 py-1.5 text-xs font-medium text-ink-soft shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            {/* Gold decorative ring offset behind photo */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/40" />
            <img
              src="/alice.jpg"
              alt="Alice — FirstWalkUS"
              className="relative w-64 sm:w-72 rounded-2xl object-cover object-top shadow-xl"
              style={{ aspectRatio: '3/4' }}
            />
            {/* Name card */}
            <div className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-2 shadow-md">
              <p className="text-xs font-bold text-ink">吳剛綾 Alice</p>
              <p className="text-xs text-ink-soft">留學陪跑顧問</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="page-wrap px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-ink text-center">精選影片</h2>
        <span className="mx-auto mt-2 mb-10 block h-0.5 w-10 rounded-full bg-gold" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {videos.map(({ id, title }) => (
            <div key={id} className="overflow-hidden rounded-2xl shadow-sm">
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
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink">我能陪你走的路</h2>
        <span className="mx-auto mt-2 mb-10 block h-0.5 w-10 rounded-full bg-gold" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: '🧭', title: '探索方向', desc: '釐清現況與目標，找到屬於你的方向。' },
            { icon: '🌱', title: '建立信心', desc: '提升自我覺察與能力，培養穩定的內在力量。' },
            { icon: '🏔️', title: '實現理想', desc: '擬定行動計畫，一步步實現理想生活。' },
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
          <div className="h-56 w-56 flex-shrink-0 rounded-full overflow-hidden bg-gold/20 mx-auto sm:mx-0" />
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
              price: 'US$3,000',
              desc: '申請 De Anza、簽證辦理、機場接機、住宿安排，及入美 3 個月全方位生活支援。',
            },
            {
              icon: '📅',
              title: '延伸月費方案',
              price: 'US$500 / 月',
              desc: '3 個月後仍需支援？每月方案包含每週 check-in、採購陪同及緊急聯絡人服務。',
            },
            {
              icon: '✨',
              title: '加購服務',
              price: '另行報價',
              desc: '買車協助、駕照訓練、轉學申請指導、校外租房協助，依需求量身安排。',
            },
          ].map(({ icon, title, price, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm text-left flex flex-col">
              <span className="text-2xl mb-3">{icon}</span>
              <p className="font-serif font-bold text-ink mb-0.5">{title}</p>
              <p className="text-sm font-semibold text-gold mb-3">{price}</p>
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
          「在初行的陪伴下，我不再迷茫，<br />找到了方向，也更相信自己。」
        </p>
        <p className="mt-4 text-sm text-ink-soft">— 來自學員的回饋</p>
      </section>

      {/* CTA */}
      <section className="page-wrap px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink mb-2">準備好開始你的改變了嗎？</h2>
        <p className="text-sm text-ink-soft mb-8">讓我們一起邁出第一步</p>
        <Link
          to="/contact"
          className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep hover:-translate-y-0.5 inline-block"
        >
          預約免費諮詢
        </Link>
      </section>
    </main>
  )
}
