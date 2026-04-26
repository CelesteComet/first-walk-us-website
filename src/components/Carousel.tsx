import { useState, useEffect, useCallback, useRef } from 'react'

const images = [
  { src: '/carousel-1.png', alt: 'De Anza College Campus Tour' },
  { src: '/carousel-2.png', alt: 'Community College Myths' },
  { src: '/carousel-3.png', alt: 'UC Berkeley Campus Tour' },
  { src: '/carousel-4.png', alt: 'UC Berkeley Admission Evaluator' },
  { src: '/carousel-5.png', alt: 'Transfer to UC Berkeley' },
]

export function Carousel({ fillBackground = false }: { fillBackground?: boolean }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
    setPaused(false)
  }

  return (
    <div
      className={fillBackground ? "relative overflow-hidden w-full h-full" : "relative overflow-hidden rounded-2xl"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map(img => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={fillBackground
              ? "w-full h-full shrink-0 object-cover object-center"
              : "w-full shrink-0 object-cover"
            }
            style={fillBackground ? undefined : { aspectRatio: '16/9' }}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
