import { stack } from '../data/content'
import { BrandIcon } from './BrandIcon'

export function LogoMarquee() {
  const items = [...stack.marquee, ...stack.marquee]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tool, index) => (
          <span className="marquee-item" key={`${tool}-${index}`}>
            <BrandIcon name={tool} />
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
