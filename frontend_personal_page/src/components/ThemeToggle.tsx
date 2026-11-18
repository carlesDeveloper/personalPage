import { themeCopy } from '../data/content'
import { useTheme } from '../theme/useTheme'
import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={isDark ? themeCopy.toLight : themeCopy.toDark}
    >
      <span className="theme-icon" key={theme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  )
}
