export type NavItem = {
  id: string
  label: string
}

export type ExperienceItem = {
  role: string
  company: string
  companyLegal?: string
  type?: string
  dates: string
  location: string
  skills: readonly string[]
  summary?: string
}

export type ProjectItem = {
  title: string
  url: string
  description: string
  image?: string
  imageAlt: string
  accent: string
}

export type StackCategory = {
  index: string
  name: string
  tools: readonly string[]
}

export type EducationItem = {
  title: string
  institution: string
  dates: string
  detail?: string
}

export type CertificationItem = {
  title: string
  issuer: string
}

export type LanguageItem = {
  name: string
  level: string
}

export type ContactLink = {
  id: 'linkedin' | 'github' | 'calendly'
  label: string
  href: string
  description: string
}

export type StatItem = {
  value: number
  suffix: string
  label: string
}

export const site = {
  name: 'Carles Lloret Ramon',
  shortName: 'CL',
  role: 'Ingeniero de Software en HESStec',
  location: 'Madrid, España',
  title: 'Carles Lloret Ramon — Ingeniero de Software',
  description:
    'Portfolio de Carles Lloret Ramon, ingeniero de software en HESStec. Frontend con React y TypeScript. Madrid, España.',
  skipLabel: 'Saltar al contenido',
  photo: {
    src: '/images/imagenCV.jpg',
    alt: 'Retrato de Carles Lloret Ramon',
  },
  pitch:
    'Ingeniero de software con foco en frontend (React y TypeScript). Combino el desarrollo de producto con formación en estadística y analítica web.',
  heroCtas: {
    projects: 'Ver proyectos',
    contact: 'Hablemos',
  },
} as const

export const intro = {
  monogram: 'CL',
  label: 'Carles Lloret Ramon',
} as const

export const navItems: readonly NavItem[] = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Stack' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
] as const

export const sectionIds: readonly string[] = navItems.map((item) => item.id)

export const about = {
  kicker: '01',
  title: 'Sobre mí',
  paragraphs: [
    'Mi interés es seguir formándome en mis dos grandes pasiones: el desarrollo web y la ciencia de datos.',
    'Ingeniero de software en HESStec (Hybrid Energy Storage Solutions), donde trabajo con React y TypeScript. Vivo en Madrid.',
    'Tras el grado en Estadística Empresarial y el máster en Analítica Web, pasé del análisis de datos (Webedia e Ymedia) al desarrollo web y de software en Avansis, Future Connections y MITICO.',
  ],
} as const

export const stats: { items: readonly StatItem[] } = {
  items: [
    { value: 9, suffix: '+', label: 'años de trayectoria' },
    { value: 3, suffix: '', label: 'proyectos en producción' },
    { value: 6, suffix: '', label: 'roles en equipos' },
  ],
}

export const experience = {
  kicker: '02',
  title: 'Experiencia',
  items: [
    {
      role: 'Ingeniero de software',
      company: 'HESStec',
      companyLegal: 'Hybrid Energy Storage Solutions Ltd',
      type: 'Jornada completa',
      dates: 'ago 2025 – actualidad',
      location: 'Valencia (híbrido)',
      skills: ['React.js', 'TypeScript'],
      summary: 'Ingeniería de software frontend.',
    },
    {
      role: 'Frontend Developer',
      company: 'MITICO',
      dates: 'may 2024 – ago 2025',
      location: 'Madrid (híbrido)',
      skills: ['React.js', 'TypeScript', 'CI/CD', 'Linux', 'Firebase', 'AWS'],
      summary: 'Desarrollo frontend.',
    },
    {
      role: 'Software Developer',
      company: 'Future Connections',
      dates: 'mar 2022 – feb 2024',
      location: 'Málaga',
      skills: ['bases de datos', 'TypeScript', 'PostgreSQL', 'Node.js', 'Linux'],
      summary: 'Desarrollo de software.',
    },
    {
      role: 'Web Developer & Data Scientist',
      company: 'Avansis',
      dates: 'ene 2018 – mar 2022',
      location: 'Madrid',
      skills: ['Linux sysadmin', 'JavaScript'],
      summary: 'Desarrollo web y ciencia de datos.',
    },
    {
      role: 'Data Analyst',
      company: 'Ymedia',
      dates: 'ago 2017 – ene 2018',
      location: 'Madrid',
      skills: [],
      summary: 'Análisis de datos.',
    },
    {
      role: 'Trainee Analyst',
      company: 'Webedia',
      dates: 'feb 2017 – may 2017',
      location: 'Madrid',
      skills: [],
      summary: 'Prácticas de análisis.',
    },
  ] satisfies ExperienceItem[],
} as const

export const projects = {
  kicker: '03',
  title: 'Proyectos',
  visit: 'Visitar sitio',
  items: [
    {
      title: 'NexaChess',
      url: 'https://nexachess.com',
      description:
        'Plataforma de análisis y entrenamiento de partidas de Lichess y Chess.com: análisis con Stockfish, por fases y seguimiento del rendimiento.',
      image: '/images/projects/nexachess.png',
      imageAlt: 'Captura de NexaChess, plataforma de análisis de partidas de ajedrez',
      accent: '#7ee0c3',
    },
    {
      title: 'Vota sin ruido',
      url: 'https://votasinruido.es',
      description:
        'Comparador apartidista de propuestas de los partidos políticos, organizadas por temas y con enlace a la fuente.',
      image: '/images/projects/votasinruido.png',
      imageAlt: 'Captura de Vota sin ruido, comparador de propuestas electorales',
      accent: '#e4c58a',
    },
    {
      title: 'Extract Invoice',
      url: 'https://extractinvoice.io',
      description:
        'SaaS de extracción de datos de facturas con IA. Extract Invoice | AI Invoice Data Extraction Tool.',
      image: '/images/projects/extractinvoice.png',
      imageAlt: 'Captura de Extract Invoice, herramienta de extracción de datos de facturas',
      accent: '#9bb7ff',
    },
  ] satisfies ProjectItem[],
} as const

export const stack = {
  kicker: '04',
  title: 'Stack',
  intro: 'Las herramientas que uso, de la interfaz a la infraestructura.',
  marquee: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'HTML5',
    'CSS3',
    'Node.js',
    'PostgreSQL',
    'Firebase',
    'AWS',
    'Linux',
    'CI/CD',
    'R',
    'analítica web',
  ],
  categories: [
    {
      index: '01',
      name: 'Lenguajes',
      tools: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'R'],
    },
    {
      index: '02',
      name: 'Frontend',
      tools: ['React.js'],
    },
    {
      index: '03',
      name: 'Backend',
      tools: ['Node.js', 'PostgreSQL', 'Firebase'],
    },
    {
      index: '04',
      name: 'Cloud y DevOps',
      tools: ['AWS', 'CI/CD', 'Linux', 'sysadmin'],
    },
    {
      index: '05',
      name: 'Datos',
      tools: ['bases de datos', 'analítica web'],
    },
  ] satisfies StackCategory[],
} as const

export const education = {
  kicker: '05',
  title: 'Formación',
  degrees: [
    {
      title: 'Grado en Estadística Empresarial',
      institution: 'Universidad Miguel Hernández de Elche',
      dates: '2012–2016',
      detail:
        'TFG: «Técnicas estadísticas y de analítica web para el análisis del tráfico de servidores web» (2016).',
    },
    {
      title: 'Máster en Analítica Web',
      institution: 'KSchool',
      dates: '2016–2017',
    },
  ] satisfies EducationItem[],
  certificationsLabel: 'Certificaciones',
  certifications: [
    {
      title: 'Curso Analítica Web',
      issuer: 'Google España',
    },
    {
      title: 'Curso básico de Marketing Digital',
      issuer: 'Google España',
    },
  ] satisfies CertificationItem[],
} as const

export const languages = {
  kicker: '06',
  title: 'Idiomas',
  items: [
    { name: 'Castellano', level: 'Nativo' },
    { name: 'Valenciano', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional básico' },
  ] satisfies LanguageItem[],
} as const

export const strengths = {
  kicker: '07',
  title: 'CliftonStrengths',
  intro:
    'Resultado del assessment CliftonStrengths de Gallup. Nombres oficiales en inglés:',
  items: [
    'Analytical',
    'Learner',
    'Communication',
    'Achiever',
    'Empathy',
    'Positivity',
  ],
} as const

export const contact = {
  kicker: '08',
  title: 'Hablemos',
  intro:
    'Puedes escribirme por LinkedIn, ver código en GitHub o reservar una conversación breve.',
  links: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/carles-lloret-ramon-2b3b3ab3/',
      description: 'Conectar en LinkedIn',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/carlesDeveloper',
      description: 'Ver repositorios',
    },
    {
      id: 'calendly',
      label: 'Calendly',
      href: 'https://calendly.com/carles-lloret',
      description: 'Reservar una reunión',
    },
  ] satisfies ContactLink[],
} as const

export const footer = {
  note: '© 2026 Carles Lloret Ramon',
} as const

export const themeCopy = {
  toLight: 'Activar tema claro',
  toDark: 'Activar tema oscuro',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
} as const
