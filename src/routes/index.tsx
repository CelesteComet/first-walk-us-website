import { createFileRoute, Link } from '@tanstack/react-router'
import { Carousel } from '../components/Carousel'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="island-kicker mb-4">矽谷留學陪跑專家</p>
        <h1 className="display-title mb-4 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          矽谷美國留學陪跑
        </h1>
        <p className="mx-auto mb-3 max-w-xl text-xl font-medium text-[var(--sea-ink)]">
          孩子第一次出國，不該一個人面對一切。
        </p>
        <p className="mx-auto mb-10 max-w-lg text-base leading-8 text-[var(--sea-ink-soft)]">
          協助台灣學生順利進入 De Anza College，並提供全方位的美國生活適應與就學支援。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-8 py-3 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            免費諮詢
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-8 py-3 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5"
          >
            我們的服務
          </Link>
        </div>
      </section>

      {/* Carousel */}
      <section className="mt-6">
        <Carousel />
      </section>
    </main>
  )
}
