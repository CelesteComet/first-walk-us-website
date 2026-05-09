import { useState } from 'react'
import { MessageCircle, X, Send, CheckCircle2 } from 'lucide-react'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', message: '' })

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.message.trim()) return

    setLoading(true)
    
    // 使用 Formspree 或是您的後端 API
    // 這裡示範發送到您的信箱 (需在 Formspree 註冊，目前先模擬發送成功)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSent(true)
      setFormData({ email: '', message: '' })
    } catch (error) {
      console.error('Send error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gold px-4 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 bg-white/10">
                  <img src="/alice.jpg" alt="Alice" className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-gold bg-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">Alice (初行學姊)</p>
                  <p className="text-[10px] opacity-90">人在線上，歡迎留言</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/10 transition-colors border-0 cursor-pointer text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages / Form Area */}
          <div className="h-80 overflow-y-auto bg-cream/30 p-5">
            {!isSent ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="h-8 w-8 shrink-0 rounded-full overflow-hidden bg-gold/20">
                    <img src="/alice.jpg" alt="Alice" className="h-full w-full object-cover" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white p-3 text-sm shadow-sm ring-1 ring-black/5 text-ink leading-relaxed">
                    你好！我是 Alice。如果有任何問題，請留下你的聯絡方式與訊息，我會盡快回覆你！
                  </div>
                </div>

                <form onSubmit={handleSend} className="space-y-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="你的電子郵件"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-xl border-0 bg-white p-3 text-sm shadow-sm ring-1 ring-black/5 focus:ring-2 focus:ring-gold/50 focus:outline-none"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="輸入你想詢問的問題..."
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full rounded-xl border-0 bg-white p-3 text-sm shadow-sm ring-1 ring-black/5 focus:ring-2 focus:ring-gold/50 focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold text-white transition hover:bg-gold-deep disabled:opacity-50 border-0 cursor-pointer"
                  >
                    {loading ? '發送中...' : '送出訊息'}
                    {!loading && <Send size={14} />}
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg font-bold text-ink">訊息已送出！</h3>
                <p className="mt-2 text-sm text-ink-soft">謝謝你的留言，<br />我會盡快透過電子郵件回覆你。</p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-sm font-bold text-gold hover:text-gold-deep bg-transparent border-0 cursor-pointer"
                >
                  再次留言
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 border-0 cursor-pointer ${
          isOpen ? 'bg-white text-ink' : 'bg-gold text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && !isSent && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
          </span>
        )}
      </button>
    </div>
  )
}
