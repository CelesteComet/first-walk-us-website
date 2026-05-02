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
        <p className="text-base font-semibold uppercase tracking-widest text-gold mb-3">關於 Alice</p>
        <h1 className="font-serif text-3xl font-bold text-ink mb-6 sm:text-5xl leading-tight">
          我走過 De Anza 轉學路，<br className="hidden sm:block" />所以懂第一步有多重要
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-9 text-ink-soft">
          走過 De Anza 到 UC Berkeley 的轉學路，也走過初來美國時的不安與摸索。<br className="hidden sm:block" />
          現在，我希望用學長姐的經驗，陪台灣學生把來美國的第一步走穩。
        </p>
      </section>

      <section className="bg-cream-alt py-12 px-4">
        <div className="page-wrap max-w-2xl mx-auto rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          
          <div className="space-y-12 text-base leading-9 text-ink-soft">
            {/* Intro */}
            <div className="space-y-6">
              <p>我叫 Alice，學弟妹們也會叫我 Alice 姊或綾姊。</p>
              <p>從小到大，我一直是英文成績很好的孩子，英文幾乎從來沒有拿過 B。那時候我以為，只要英文好，來美國讀書應該不會太困難。</p>
              <p>但真正第一次來美國，在 De Anza College 讀大一的時候，我才發現：<br />
              <strong className="text-ink font-bold text-lg">「英文好，不代表一切都會很順利。」</strong></p>
              <p>剛到美國時，我遇到很多現實問題。從住宿、交通、銀行開戶、電話卡、選課、買生活用品，到怎麼適應全英文環境，很多事情都不是課本裡會教的。</p>
              <p>那時候的我，很多事情只能自己摸索。也因為自己走過這段路，我很清楚：<br />
              <strong className="text-ink font-bold text-lg">「學生剛到美國最需要的，不只是申請資料，而是有人陪他把第一步走穩。」</strong></p>
            </div>

            {/* Path */}
            <div className="pt-10 border-t border-cream-alt">
              <p className="font-serif text-2xl font-bold text-ink mb-6">從 De Anza 到 UC Berkeley，再到矽谷灣區生活</p>
              <div className="mb-8 overflow-hidden rounded-2xl shadow-sm border border-cream-alt">
                <img src="/carousel-3.png" alt="UC Berkeley Campus" className="w-full h-48 sm:h-72 object-cover" />
              </div>
              <div className="space-y-6">
                <p>2010 年，我第一次來到美國，在 De Anza College 開始我的大一生活，並在 2012 年成功轉學到 UC Berkeley 以及其他所有申請的 5 所 UC 學校。</p>
                <p>畢業後，我曾在矽谷灣區新創公司工作，也曾回台灣擔任國際品牌行銷經理。2019 年，我再次回到美國矽谷灣區生活。</p>
                <p>從留學生、轉學生，到在矽谷灣區工作與生活，再到後來成為媽媽，這些經歷讓我更了解台灣學生剛來美國時會遇到的文化差異、生活適應與心理不安，也更懂家長在遠方最放心不下的是什麼。</p>
              </div>
            </div>

            {/* Personal Life */}
            <div className="pt-10 border-t border-cream-alt">
              <p className="font-serif text-2xl font-bold text-ink mb-6">從留學生，到真正生活在矽谷灣區的人</p>
              <div className="space-y-6">
                <p>後來，我也在 De Anza 認識了我的先生。他是台灣出生、在美國長大的 ABC，雖然不太會說中文，但也因為他的生活背景，我更了解矽谷灣區在地文化、美國家庭的生活方式，以及很多留學生剛來時不一定熟悉的文化差異。</p>
                <p>這些年，我不只是用「留學生」的角度認識美國，也從生活、家庭、人際和文化裡，更深地理解矽谷灣區的日常。</p>
                <p>現在，我也是一位快 3 歲孩子的媽媽。成為媽媽之後，我更能理解父母把孩子送到海外讀書時，那種既期待又不放心的心情。這也是為什麼我希望 FirstWalkUS 不只是提供資訊，而是讓學生和家長在最陌生的第一步，多一份安心。</p>
                <p>創立 FirstWalkUS 的過程雖然不容易，但我一直很確定，這是我真心想做的事：陪學生把剛來美國最不安的第一步走穩。</p>
              </div>
            </div>

            {/* Why FirstWalkUS */}
            <div className="pt-10 border-t border-cream-alt">
              <p className="font-serif text-2xl font-bold text-ink mb-6">為什麼創立 FirstWalkUS？</p>
              <div className="space-y-8">
                <p>很多台灣家長在準備孩子出國時，會把重點放在「申請學校」和「簽證」。但孩子真正開始感到不安，往往是在抵達美國之後。</p>
                
                <div className="py-8 border-y border-gold/10">
                  <p className="text-sm font-bold text-gold uppercase tracking-wider mb-8 text-center sm:text-left">抵達當地後，學生必須面對的真實細節：</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      { q: '哪一間銀行對留學生比較實用？', icon: '🏦' },
                      { q: '電話卡一定要辦大公司才比較好嗎？', icon: '📱' },
                      { q: '第一學期如何準備選課避免進度延遲？', icon: '📚' },
                      { q: '哪些校園資源是留學生可以多加利用的？', icon: '🏫' },
                      { q: '附近哪裡買生活用品方便又划算？', icon: '🛒' },
                      { q: '想家、孤單、不知道問誰時該怎麼辦？', icon: '🤝' },
                    ].map((item) => (
                      <div key={item.q} className="group flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center text-sm shadow-inner transition-colors group-hover:bg-gold/10">
                          {item.icon}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm font-medium text-ink leading-relaxed border-b border-gold/5 pb-2">
                            {item.q}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>這些事情看似不大，但對第一次來美國的學生來說，如果身邊沒有熟悉當地的人可以問，就會變得很有壓力。</p>
                <p>我創立 FirstWalkUS，是希望用學長姐的經驗，陪台灣學生走過剛來美國最陌生、最需要安全感的那一段路。</p>
              </div>
            </div>

            {/* Not an agent */}
            <div className="pt-10 border-t border-cream-alt">
              <p className="font-serif text-2xl font-bold text-ink mb-6">我不是仲介，我是過來人</p>
              <div className="mb-8 overflow-hidden rounded-2xl shadow-sm border border-cream-alt">
                <img src="/5.jpg" alt="Supportive environment" className="w-full h-48 sm:h-72 object-cover" />
              </div>
              <div className="space-y-6">
                <p>FirstWalkUS 不是冷冰冰的傳統代辦，也不是替學生決定人生方向的顧問服務。</p>
                <p>我想提供的，是更貼近學生生活的在地陪伴：在學生最需要支持的初期，陪他把生活、開學與適應的第一步慢慢走穩。</p>
                <p>我來美國將近 16 年，走過很多彎路，也吃過很多虧。我知道剛來美國時，那種「英文明明不差，卻還是不知道怎麼辦」的無助感。</p>
                <p>我也知道很多台灣家長在遠方看著孩子出國，心裡真正擔心的不是只有學校申請，而是：孩子會不會孤單？會不會不知道去哪裡買東西？遇到問題時，有沒有人可以問？</p>
                <p>所以 FirstWalkUS 想提供的，不只是服務清單，而是一種更貼近學生真實生活的陪伴。</p>
                <p className="font-serif font-bold text-gold text-2xl mt-10 text-center">
                  Welcome to your First Walk.<br />
                  這一次，你不是一個人。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap px-4 py-14">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center max-w-4xl mx-auto mb-16">
          {[
            { number: '16 年', label: '美國在地生活' },
            { number: 'UC Berkeley', label: '轉學成功經驗' },
            { number: 'De Anza College', label: '學姊親身經歷' },
          ].map(({ number, label }) => (
            <div key={label} className="flex flex-col items-center justify-center rounded-3xl bg-white px-3 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:px-6 sm:py-10 h-full border border-cream-alt">
              <p className="font-serif text-2xl sm:text-4xl font-bold text-gold mb-3 leading-tight tracking-tight">{number}</p>
              <p className="text-[11px] sm:text-lg font-bold text-ink-soft tracking-normal sm:tracking-wide">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/services"
            className="rounded-full border border-gold px-10 py-4 text-base font-semibold text-gold no-underline transition hover:bg-gold hover:text-white text-center"
          >
            了解陪跑服務
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-gold px-10 py-4 text-base font-semibold text-white no-underline transition hover:bg-gold-deep hover:-translate-y-0.5 text-center"
          >
            預約免費諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
