import { useId, type ReactNode } from 'react'

type FlagProps = {
  title: string
  className?: string
}

function FlagFrame({ title, className, children }: FlagProps & { children: ReactNode }) {
  const clipId = `flag-${useId().replace(/:/g, '')}`

  return (
    <span className={className} role="img" aria-label={title}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <clipPath id={clipId}>
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath={`url(#${clipId})`}>{children}</g>
      </svg>
    </span>
  )
}

export function FlagSpain({ title, className }: FlagProps) {
  return (
    <FlagFrame title={title} className={className}>
      <rect width="36" height="36" fill="#c60b1e" />
      <rect y="9" width="36" height="18" fill="#ffc400" />
    </FlagFrame>
  )
}

export function FlagUnitedKingdom({ title, className }: FlagProps) {
  return (
    <FlagFrame title={title} className={className}>
      <rect width="36" height="36" fill="#012169" />
      <path d="M0 0l36 36M36 0L0 36" stroke="#fff" strokeWidth="7" />
      <path d="M0 0l36 36M36 0L0 36" stroke="#c8102e" strokeWidth="3.2" />
      <path d="M18 0v36M0 18h36" stroke="#fff" strokeWidth="11" />
      <path d="M18 0v36M0 18h36" stroke="#c8102e" strokeWidth="6.4" />
    </FlagFrame>
  )
}

export function FlagValencia({ title, className }: FlagProps) {
  return (
    <FlagFrame title={title} className={className}>
      <rect width="36" height="36" fill="#f7d417" />
      <rect y="4" width="36" height="4" fill="#da121a" />
      <rect y="12" width="36" height="4" fill="#da121a" />
      <rect y="20" width="36" height="4" fill="#da121a" />
      <rect y="28" width="36" height="4" fill="#da121a" />
      <path d="M0 0h11v36H0z" fill="#0058a3" />
      <path d="M11 0l-11 7.2V0z" fill="#da121a" />
    </FlagFrame>
  )
}
