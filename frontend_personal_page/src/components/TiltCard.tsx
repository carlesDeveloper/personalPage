import type { CSSProperties, ReactNode } from 'react'
import { useRef } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

type TiltCardProps = {
  className?: string
  children: ReactNode
  featured?: boolean
}

export function TiltCard({ className = '', children, featured = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { desktopEffects } = useMotionProfile()

  const reset = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
    node.style.setProperty('--mx', '50%')
    node.style.setProperty('--my', '50%')
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${featured ? 'tilt-card--featured' : ''} ${className}`.trim()}
      onMouseMove={(event) => {
        if (!desktopEffects) return
        const node = ref.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height
        node.style.setProperty('--rx', `${(0.5 - py) * 10}deg`)
        node.style.setProperty('--ry', `${(px - 0.5) * 12}deg`)
        node.style.setProperty('--mx', `${px * 100}%`)
        node.style.setProperty('--my', `${py * 100}%`)
      }}
      onMouseLeave={reset}
      style={{ '--rx': '0deg', '--ry': '0deg', '--mx': '50%', '--my': '50%' } as CSSProperties}
    >
      {children}
    </div>
  )
}
