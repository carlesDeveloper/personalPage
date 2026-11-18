import { useEffect, useState } from 'react'
import { navItems, site, themeCopy } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { CloseIcon, MenuIcon } from './icons'
import { ThemeToggle } from './ThemeToggle'

type NavProps = {
  sectionIds: readonly string[]
}

export function Nav({ sectionIds }: NavProps) {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-bar">
        <div className="container nav-inner">
        <a className="nav-logo" href="#inicio" onClick={close}>
          <span className="nav-logo-short">{site.shortName}</span>
          <span className="nav-logo-full">Carles Lloret</span>
          <span className="nav-logo-dot">.</span>
        </a>
        <nav className="nav-links" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? themeCopy.closeMenu : themeCopy.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        </div>
      </div>
      <nav id="menu-movil" className={`nav-drawer ${open ? 'open' : ''}`} aria-label="Móvil">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? 'location' : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
