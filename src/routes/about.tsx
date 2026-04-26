import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main className="pb-20">
      <section className="rise-in page-wrap px-4 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">關於我</p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-4 sm:text-5xl">陪伴，是我熱愛的事</h1>
        <p className="mx-auto max-w-xl text-base leading-8 text-ink-soft">
          我相信每個人都有屬於自己的節奏與時區。我在這裡，陪你釐清方向、勇越挑戰。
        </p>
      </section>

      <section className="bg-cream-alt py-12 px-4">
        <div className="page-wrap max-w-2xl mx-auto rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">我的故事</p>
          <p className="mb-5 text-sm leading-8 text-ink-soft">
            我從台灣來到加州，一開始不認識任何人，英文也不夠流利，面對一疊令人困惑的文件。我自己摸索出一條路，申請進入 De Anza College，完成了轉學流程，最終進入頂尖 UC。
          </p>
          <p className="text-sm leading-8 text-ink-soft">
            這段經歷催生了「初行 FirstWalkUS」。我建立了自己當年需要卻沒有的指引，讓下一位學生不必獨自面對一切。
          </p>
        </div>
      </section>

      <section className="page-wrap px-4 py-14">
        <div className="grid grid-cols-3 gap-4 text-center max-w-2xl mx-auto mb-12">
          {[
            { number: '50+', label: '陪伴學員' },
            { number: 'UC', label: '轉學成功' },
            { number: '5 年', label: '矽谷在地' },
          ].map(({ number, label }) => (
            <div key={label} className="rounded-2xl bg-white px-4 py-6 shadow-sm">
              <p className="font-serif text-3xl font-bold text-gold mb-1">{number}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">{label}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/contact"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white no-underline transition hover:bg-gold-deep hover:-translate-y-0.5 inline-block"
          >
            預約免費諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
