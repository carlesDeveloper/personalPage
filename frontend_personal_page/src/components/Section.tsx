import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  kicker: string
  title: string
  icon?: ReactNode
  align?: 'start' | 'center'
  children: ReactNode
}

export function Section({ id, kicker, title, icon, align = 'start', children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className={`section-header${align === 'center' ? ' section-header--center' : ''}`}>
            <p className="section-kicker">{kicker}</p>
            <h2 id={`${id}-title`} className="section-title">
              {icon ? <span className="section-icon">{icon}</span> : null}
              {title}
            </h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
