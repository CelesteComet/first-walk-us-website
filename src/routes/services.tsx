import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({ component: Services })

const coreServices = [
  { icon: '🎓', title: '申請 De Anza College', desc: '含申請指導及遞交，全程陪你完成。' },
  { icon: '🛂', title: '學生簽證申請', desc: '協助 F-1 簽證申請流程，確保文件正確齊全。' },
  { icon: '🏠', title: '住宿安排協助', desc: '協助評估並安排宿舍、校外租屋或 Homestay。' },
  { icon: '✈️', title: '機場接機', desc: '首次抵達美國時，親自到機場接機。' },
  { icon: '📱', title: '電話卡與銀行開戶', desc: '協助辦理美國電話卡及銀行開戶，快速安頓。' },
  { icon: '🗺️', title: '校園導覽', desc: '一次 1.5 小時校園導覽，分享美國讀書與轉學經驗。' },
  { icon: '🛒', title: '每週生活陪同', desc: '入美後每週 1 小時，陪你熟悉校園周邊環境與採買。' },
  { icon: '💬', title: '每週 Check-in', desc: '入美 3 個月內，每週一次 30 分鐘線上或面對面 check-in。' },
  { icon: '📋', title: '第一學期選課陪同', desc: '陪同並指導第一學期的選課規劃（一次）。' },
  { icon: '🤝', title: '3 個月無限諮詢', desc: '入境起 3 個月內，無限次生活適應與問題諮詢支援。' },
]

const addOns = [
  { title: '買車協助', desc: '協助尋找、評估與購買合適車輛。' },
  { title: '駕照考試訓練', desc: '備考訓練及考試當天全程陪同。' },
  { title: '轉學申請指導', desc: '轉學申請規劃與申請書撰寫指導。' },
  { title: '校外租房協助', desc: '協助找房、看房與合約評估（第二次住宿）。' },
]

function Services() {
  return (
    <main className="pb-20">
      {/* Header */}
      <section className="bg-cream-alt py-16 px-4 text-center">
        <div className="page-wrap">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">服務項目</p>
          <h1 className="font-serif text-4xl font-bold text-ink sm:text-5xl mb-4">
            從申請到落地，全程陪你走
          </h1>
          <p className="text-ink-soft text-base leading-8 max-w-xl mx-auto">
            從 De Anza 申請、簽證辦理，到抵美後的生活安頓，提供一對一全方位支援。
          </p>
        </div>
      </section>

      {/* Core Package */}
      <section className="page-wrap px-4 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">核心服務套餐</h2>
            <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {coreServices.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <p className="font-serif font-bold text-ink mb-1">{title}</p>
                <p className="text-sm text-ink-soft leading-6">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Extended Plan */}
      <section className="bg-cream-alt py-16 px-4">
        <div className="page-wrap">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink">延伸月費方案</h2>
              <p className="text-sm text-ink-soft mt-1">入美 3 個月後，可選擇繼續加購</p>
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: '🆘', title: '緊急聯絡人支援', desc: '作為你在美期間的緊急聯絡人之一。' },
              { icon: '📞', title: '每週 Check-in', desc: '每週一次 30–45 分鐘電話或面對面 check-in。' },
              { icon: '🛍️', title: '每週採購陪同', desc: '每週最多 1 小時採購協助或陪同（限學校附近，每月共 4 小時）。' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-serif font-bold text-ink mb-1">{title}</p>
                  <p className="text-sm text-ink-soft leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="page-wrap px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-ink mb-1">加購服務</h2>
        <p className="text-sm text-ink-soft mb-2">另行報價，依需求量身安排</p>
        <span className="mb-10 block h-0.5 w-10 rounded-full bg-gold" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {addOns.map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-cream-alt bg-white p-5 shadow-sm">
              <p className="font-serif font-bold text-ink mb-1">{title}</p>
              <p className="text-sm text-ink-soft leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-alt py-14 px-4 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink mb-2">想了解更多或準備開始？</h2>
        <p className="text-sm text-ink-soft mb-8">歡迎預約免費諮詢，一起討論最適合你的方案</p>
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
