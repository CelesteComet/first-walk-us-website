import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

export function CalendlyModal({ open, onClose }: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (open) {
      setLoaded(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden"
        style={{ height: 'min(700px, 90vh)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow text-ink-soft hover:text-ink transition"
          aria-label="關閉"
        >
          <X size={16} />
        </button>

        {/* Centered loading spinner */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="h-8 w-8 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
          </div>
        )}

        <iframe
          src="https://calendly.com/firstwalkus/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
          className="w-full h-full border-0"
          title="預約免費諮詢"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
