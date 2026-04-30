import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main className="pb-20">
      <section className="rise-in page-wrap px-4 py-16 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/10 -m-2 blur-xl" />
            <img
              src="/alice.jpg"
              alt="Alice"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">關於我</p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-4 sm:text-5xl">陪伴，是我熱愛的事</h1>
        <p className="mx-auto max-w-xl text-base leading-8 text-ink-soft mb-2">
          我叫 Alice。學弟妹們都叫我 Alice 姊或綾姊。
        </p>
        <p className="mx-auto max-w-xl text-base leading-8 text-ink-soft">
          我相信每個人都有屬於自己的節奏與時區。我在這裡，陪你釐清方向、勇越挑戰。
        </p>
      </section>

      <section className="bg-cream-alt py-12 px-4">
        <div className="page-wrap max-w-2xl mx-auto rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">我的故事</p>
          
          <div className="space-y-6 text-sm leading-8 text-ink-soft">
            <p>
              2010 年，我一個人從台灣來到美國。<br />
              沒有朋友、沒有家人，也沒有任何留學代辦可以幫忙。
            </p>

            <p>
              我靠著自己，一步一步完成申請，進入了 De Anza College。<br />
              剛開始住在 homestay，兩個月後就決定搬出來，和剛認識的朋友一起合租，開始真正屬於自己的留學生活。
            </p>

            <p>
              那兩年，我一邊努力讀書，一邊努力探索生活。<br />
              最終成功轉學到 University of California, Berkeley，並且申請上所有其他 6 所的 UC 四年制大學。
            </p>

            <p>
              畢業後，我留在灣區新創孵化器 work，之後回到台灣擔任品牌行銷經理五年。<br />
              2019 年，我嫁給了當年在 De Anza 認識的學長，重新回到美國，定居在矽谷 Cupertino，成為一位全職媽媽，同時創立了「初行 FirstWalkUS」。
            </p>

            <div className="pt-4">
              <p className="font-serif text-lg font-bold text-ink mb-3">✨ 為什麼創立 FirstWalkUS？</p>
              <p>
                台灣的留學代辦，在申請與簽證上已經非常成熟。但學生真正困難的，往往是——落地之後的生活。
              </p>
              <p>
                語言也許可以溝通，但文化、習慣、生活細節，沒有人會教你。
              </p>
              <p>
                我自己，就是被迫一個人走過那段最孤單的前三個月。
              </p>
            </div>

            <div>
              <p className="font-serif font-bold text-ink mb-2">我還記得那些問題——</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>哪裡有便宜又適合學生的餐廳？</li>
                <li>哪裡可以買到好吃的冷凍食品？</li>
                <li>哪些東西比較符合台灣口味？</li>
                <li>生病了該買哪個牌子的藥？</li>
                <li>想拿 A 的課選不到怎麼辦？</li>
                <li>有沒有免費的一對一輔導資源？</li>
              </ul>
              <p className="mt-3">這些事情，沒有對錯，只有「走過的人才知道」。</p>
            </div>

            <div className="pt-4">
              <p className="font-serif text-lg font-bold text-ink mb-3">💛 我想做的，不只是服務</p>
              <p>
                我創立 FirstWalkUS，是因為我希望——如果當年的我，能遇到一個學姊，人生會輕鬆很多。
              </p>
              <p className="italic">
                First Walk = 人生第一次在美國的那一步<br />
                US = United States，也是 Us（我們一起）
              </p>
              <p>
                我想成為那個學姊。陪你走過來美國最不安、最陌生的那一段路。
              </p>
            </div>

            <div className="pt-4">
              <p className="font-serif text-lg font-bold text-ink mb-3">🧭 我提供的是「前三個月的陪跑」</p>
              <p className="mb-3">不是冷冰冰的代辦，而是在地的陪伴：</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li>✈️ 機場接機</li>
                <li>🏠 生活落地協助</li>
                <li>🏫 校園導覽 + 選課經驗</li>
                <li>🛒 每週熟悉生活圈</li>
                <li>💬 每週 check-in</li>
                <li>📚 學業與生活資源指引</li>
              </ul>
              <p className="mt-4">
                因為我知道，Homestay 不一定有時間照顧你，但學姊可以。
              </p>
            </div>

            <div className="pt-6 border-t border-cream-alt">
              <p className="font-serif text-lg font-bold text-ink mb-3">🌱 我不是仲介，我是過來人</p>
              <p>
                我來美國 16 年，走過很多彎路，也吃過很多虧。
              </p>
              <p>
                現在，我只想讓你——少走一點彎路，多一點安心。
              </p>
              <p className="font-serif font-bold text-gold text-lg mt-4">
                Welcome to your First Walk.<br />
                這一次，你不是一個人。
              </p>
            </div>
          </div>
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
