import { useEffect, useState } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz'

type ScrambleTextProps = {
  text: string
  delay?: number
}

export function ScrambleText({ text, delay = 0 }: ScrambleTextProps) {
  const { animate } = useMotionProfile()
  const [output, setOutput] = useState(animate ? '' : text)

  useEffect(() => {
    if (!animate) {
      setOutput(text)
      return
    }

    let frame = 0
    let timer = 0
    const duration = 18
    const start = window.setTimeout(() => {
      const tick = () => {
        frame += 1
        const progress = Math.min(1, frame / duration)
        const reveal = Math.floor(progress * text.length)
        const next = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < reveal) return text[index]
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
        setOutput(next)
        if (progress < 1) timer = window.setTimeout(tick, 28)
      }
      tick()
    }, delay)

    return () => {
      window.clearTimeout(start)
      window.clearTimeout(timer)
    }
  }, [animate, delay, text])

  return <span>{output || text}</span>
}
