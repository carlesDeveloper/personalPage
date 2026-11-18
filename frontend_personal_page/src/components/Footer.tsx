import { footer } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>{footer.note}</p>
      </div>
    </footer>
  )
}
