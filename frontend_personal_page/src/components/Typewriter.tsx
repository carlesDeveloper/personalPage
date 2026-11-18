import { useEffect, useState } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

type TypewriterProps = {
  text: string
  delay?: number
  className?: string
}

export function Typewriter({ text, delay = 0, className }: TypewriterProps) {
  const { animate } = useMotionProfile()
  const [count, setCount] = useState(animate ? 0 : text.length)

  useEffect(() => {
    if (!animate) {
      setCount(text.length)
      return
    }

    let interval = 0
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((current) => {
          if (current >= text.length) {
            window.clearInterval(interval)
            return current
          }
          return current + 1
        })
      }, 16)
    }, delay)

    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [animate, delay, text])

  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {animate && count < text.length ? <span className="caret" /> : null}
      </span>
    </p>
  )
}
