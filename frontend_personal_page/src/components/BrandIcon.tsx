import type { IconType } from 'react-icons'
import { FaAws } from 'react-icons/fa'
import {
  LuChartBar,
  LuDatabase,
  LuServer,
} from 'react-icons/lu'
import {
  SiCss,
  SiFirebase,
  SiGithubactions,
  SiGnubash,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiPostgresql,
  SiR,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

const ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  SQL: LuDatabase,
  R: SiR,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  AWS: FaAws,
  'CI/CD': SiGithubactions,
  Linux: SiLinux,
  sysadmin: LuServer,
  'Linux sysadmin': SiGnubash,
  'bases de datos': LuDatabase,
  'analítica web': SiGoogleanalytics,
  'Google Analytics': SiGoogleanalytics,
}

export function BrandIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name]
  if (!Icon) return <LuChartBar className={className} aria-hidden="true" />
  return <Icon className={className} aria-hidden="true" />
}
