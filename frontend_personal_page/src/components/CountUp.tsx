import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

type CountUpProps = {
  value: number
  suffix?: string
}

export function CountUp({ value, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const { animate } = useMotionProfile()
  const [current, setCurrent] = useState(animate ? 0 : value)

  useEffect(() => {
    if (!inView) return
    if (!animate) {
      setCurrent(value)
      return
    }

    const start = performance.now()
    const duration = 1100
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animate, inView, value])

  return (
    <span ref={ref} className="stat-value">
      {current}
      {suffix}
    </span>
  )
}
