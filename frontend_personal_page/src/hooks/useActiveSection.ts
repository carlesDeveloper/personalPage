import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return undefined

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let next = ids[0] ?? ''
        let best = 0
        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > best) {
            best = ratio
            next = id
          }
        }

        if (best > 0) {
          setActive(next)
        }
      },
      {
        rootMargin: '-22% 0px -58% 0px',
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}
