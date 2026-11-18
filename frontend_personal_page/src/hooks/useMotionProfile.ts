import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return fine
}

export function useMotionProfile() {
  const reduced = Boolean(useReducedMotion())
  const fine = useFinePointer()

  return {
    reduced,
    fine,
    animate: !reduced,
    desktopEffects: !reduced && fine,
  }
}
