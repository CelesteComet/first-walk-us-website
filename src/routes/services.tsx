import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  GraduationCap, 
  FileText, 
  Home, 
  Plane, 
  Smartphone, 
  Map, 
  ShoppingBag, 
  MessageSquare, 
  BookOpen, 
  UserPlus,
  LifeBuoy,
  Phone,
  Car,
  ShieldCheck,
  TrendingUp,
  Key,
  Sparkles
} from 'lucide-react'

export const Route = createFileRoute('/services')({ component: Services })

const coreServices = [
  { icon: <GraduationCap size={20} />, title: '申請 De Anza College', desc: '含申請指導及遞交，全程陪你完成。' },
  { icon: <FileText size={20} />, title: '學生簽證申請', desc: '協助 F-1 簽證申請流程，確保文件正確齊全。' },
  { icon: <Home size={20} />, title: '住宿安排協助', desc: '協助評估並安排宿舍、校外租屋或 Homestay。' },
  { icon: <Plane size={20} />, title: '機場接機', desc: '首次抵達美國時，親自到機場接機。' },
  { icon: <Smartphone size={20} />, title: '電話卡與銀行開戶', desc: '協助辦理美國電話卡及銀行開戶，快速安頓。' },
  { icon: <Map size={20} />, title: '校園導覽', desc: '一次 1.5 小時校園導覽，分享美國讀書與轉學經驗。' },
  { icon: <ShoppingBag size={20} />, title: '每週生活陪同', desc: '入美後每週 1 小時，陪你熟悉校園周邊環境與採買。' },
  { icon: <MessageSquare size={20} />, title: '每週 Check-in', desc: '入美 3 個月內，每週一次 30 分鐘線上或面對面 check-in。' },
  { icon: <BookOpen size={20} />, title: '第一學期選課陪同', desc: '陪同並指導第一學期的選課規劃（一次）。' },
  { icon: <UserPlus size={20} />, title: '3 個月無限諮詢', desc: '入境起 3 個月內，無限次生活適應與問題諮詢支援。' },
]

const addOns = [
  { icon: <Car size={20} />, title: '買車協助', desc: '協助尋找、評估與購買合適車輛。' },
  { icon: <ShieldCheck size={20} />, title: '駕照考試訓練', desc: '備考訓練及考試當天全程陪同。' },
  { icon: <TrendingUp size={20} />, title: '轉學申請指導', desc: '轉學申請規劃與申請書撰寫指導。' },
  { icon: <Key size={20} />, title: '校外租房協助', desc: '協助找房、看房與合約評估（第二次住宿）。' },
]

function Services() {
  return (
    <main className="pb-20">
      {/* Header */}
      <section className="bg-cream-alt py-20 px-4 text-center">
        <div className="page-wrap">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">Service Offerings</p>
          <h1 className="font-serif text-4xl font-bold text-ink sm:text-6xl mb-6 tracking-tight">
            從申請到落地，全程陪你走
          </h1>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            提供一對一全方位支援，幫助台灣學生把留學美國的第一步走穩。
          </p>
        </div>
      </section>

      {/* Core Package - Featured Section */}
      <section className="page-wrap px-4 -mt-10 mb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 sm:p-16 shadow-2xl border border-gold/20">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16 border-b border-white/10 pb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold mb-6">
                  <Sparkles size={14} />
                  Signature Package
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">核心服務套餐</h2>
                <p className="text-cream/80 text-lg leading-relaxed">
                  這是我們最完整的全方位方案，涵蓋了從台灣出發前到抵達美國後前 3 個月的所有關鍵支援，確保學生能快速融入矽谷生活。
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-gold px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-gold-deep hover:-translate-y-1 active:scale-95 no-underline"
                >
                  預約了解詳情
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {coreServices.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold border border-gold/30">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-white mb-2 text-lg leading-tight">{title}</p>
                    <p className="text-sm text-cream/70 leading-relaxed font-normal">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Plan */}
      <section className="bg-[#FAF9F6] py-24 px-4">
        <div className="page-wrap">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Continued Care</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-6">延伸月費方案</h2>
            <p className="text-ink text-lg leading-relaxed">
              入美 3 個月後，若您希望孩子能持續獲得在地學長姐的關照與支持，可以選擇按月續約以下服務。
            </p>
            <div className="mt-6 h-1 w-12 bg-gold/30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: <LifeBuoy size={28} />, title: '緊急聯絡人支援', desc: '作為你在美期間的緊急聯絡人之一，提供第一時間的現場協助。' },
              { icon: <Phone size={28} />, title: '每週 Check-in', desc: '每週一次 30–45 分鐘定期聯繫，關心課業適應與心理狀態。' },
              { icon: <ShoppingBag size={28} />, title: '每週採購陪同', desc: '每週最多 1 小時採購協助或陪同，解決生活採買與交通問題。' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-6 rounded-[2rem] bg-white p-10 shadow-sm border border-black/5">
                <div className="text-gold">{icon}</div>
                <div>
                  <p className="font-serif text-2xl font-bold text-ink mb-4">{title}</p>
                  <p className="text-ink leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="page-wrap px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-6">加購服務</h2>
            <p className="text-ink text-lg leading-relaxed mb-8">
              針對個別特殊需求，我們也提供高度客製化的加購服務，確保學生在美國生活的方方面面都能獲得專業指引。
            </p>
            <div className="p-6 rounded-2xl bg-cream-alt border border-gold/20">
              <p className="text-gold font-bold mb-2 uppercase text-xs tracking-widest">Note</p>
              <p className="text-ink text-sm italic">此部分服務將依據具體工作量與交通距離另行報價。</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {addOns.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-6 rounded-3xl border border-cream-alt bg-white p-8 shadow-sm items-start">
                <div className="text-gold/60 mt-1">{icon}</div>
                <div>
                  <p className="font-serif font-bold text-ink text-xl mb-3">{title}</p>
                  <p className="text-base text-ink leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-wrap px-4 pb-20">
        <div className="rounded-[3rem] bg-gold p-12 sm:p-20 text-center text-white shadow-2xl shadow-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6">想了解更多或準備開始？</h2>
            <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              每一位學生的情況都是獨特的。歡迎預約免費諮詢，<br className="hidden sm:block" />我們一起討論最適合您孩子的陪跑方案。
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-white px-12 py-5 text-xl font-bold text-gold shadow-xl transition-all hover:scale-105 active:scale-95 no-underline"
            >
              預約免費諮詢
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
