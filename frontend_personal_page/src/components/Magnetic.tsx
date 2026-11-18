import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

type MagneticProps = {
  href: string
  className?: string
  children: ReactNode
  target?: string
  rel?: string
}

export function Magnetic({ href, className, children, target, rel }: MagneticProps) {
  const { desktopEffects } = useMotionProfile()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.35 })

  return (
    <motion.a
      href={href}
      className={className}
      target={target}
      rel={rel}
      style={desktopEffects ? { x: springX, y: springY } : undefined}
      onMouseMove={(event) => {
        if (!desktopEffects) return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.38)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.38)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.a>
  )
}
