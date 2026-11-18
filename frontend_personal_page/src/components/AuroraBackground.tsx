import { lazy, Suspense } from 'react'
import { useMotionProfile } from '../hooks/useMotionProfile'

const ParticleField = lazy(() => import('./ParticleField'))

export function AuroraBackground() {
  const { animate, fine } = useMotionProfile()
  const showParticles = animate && fine

  return (
    <div className="mesh" aria-hidden="true">
      <div className="aurora" />
      <div className="mesh-orb mesh-orb--teal" />
      <div className="mesh-orb mesh-orb--gold" />
      <div className="mesh-orb mesh-orb--mint" />
      {showParticles ? (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      ) : null}
    </div>
  )
}
