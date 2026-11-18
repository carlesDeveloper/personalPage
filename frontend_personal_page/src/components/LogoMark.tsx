import { useState } from 'react'

type LogoMarkProps = {
  src?: string
  alt: string
  initials: string
  className?: string
}

export function LogoMark({ src, alt, initials, className }: LogoMarkProps) {
  const [failed, setFailed] = useState(!src)

  return (
    <span className={className} data-fallback={failed ? 'true' : undefined}>
      {failed ? (
        <span className="logo-fallback" aria-hidden="true">
          {initials}
        </span>
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
      {failed ? <span className="sr-only">{alt}</span> : null}
    </span>
  )
}
