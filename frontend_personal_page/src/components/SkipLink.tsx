import { site } from '../data/content'

export function SkipLink() {
  return (
    <a className="skip-link" href="#contenido">
      {site.skipLabel}
    </a>
  )
}
