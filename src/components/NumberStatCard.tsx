import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react' // or adjust path if NumberCounter is separate

interface StatCardProps {
  end: number
  label: string
  suffix?: string
  colorClass?: string // Tailwind class for number color/gradient
}

export default function StatCard({ end, label, suffix = '', colorClass }: StatCardProps) {

  function NumberCounter({ end, duration = 1700, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [value, setValue] = useState(0)
  
    useEffect(() => {
      if (!isInView) return
      let start: number | null = null
      const startValue = 0
      const endValue = end
  
      function step(timestamp: number) {
        if (start === null) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const current = Math.floor(startValue + (endValue - startValue) * progress)
        setValue(current)
        if (progress < 1) requestAnimationFrame(step)
      }
  
      const r = requestAnimationFrame(step)
      return () => cancelAnimationFrame(r)
    }, [isInView, duration, end])
  
    return (
      <span ref={ref}>
        {value.toLocaleString()}
        {suffix}
      </span>
    )
  }

  const numberColor = colorClass ?? 'bg-gradient-to-r from-blue-600 to-sky-400'

  return (
    <div className="text-center flex flex-col gap-3">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight">
        <span className={`bg-clip-text text-transparent ${numberColor}`}>
          <NumberCounter end={end} suffix={suffix} />
        </span>
      </div>
      <div className="mt-1 text-sm sm:text-md md:text-2xl text-zinc-600">{label}</div>
    </div>
  )
}