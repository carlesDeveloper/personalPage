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
  affiliation?: string
  logo?: string
  initials: string
}

export type ProjectItem = {
  title: string
  url: string
  subtitle: string
  description: string
  tags: readonly string[]
  logo?: string
  logoAlt: string
  initials: string
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
  dates?: string
}

export type LanguageFlag = 'es' | 'en' | 'va'

export type LanguageItem = {
  name: string
  level: string
  flag: LanguageFlag
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
    src: '/images/avatar.jpg',
    webp: '/images/avatar.webp',
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
    'Tras el grado en Estadística Empresarial y el máster en Analítica Web, pasé del análisis de datos (Webedia e Ymedia) al desarrollo web y de software en Banco Santander, Future Connections y MITICO.',
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
      logo: '/logos/companies/hessstec.png',
      initials: 'HS',
    },
    {
      role: 'Frontend Developer',
      company: 'MITICO',
      dates: 'abr 2024 – may 2025',
      location: 'Madrid (híbrido)',
      skills: ['React', 'SCSS', 'Tailwind CSS', 'Node.js', 'Firebase', 'AWS', 'Tencent Cloud', 'GitHub Actions'],
      summary: 'Desarrollo frontend.',
      initials: 'MI',
    },
    {
      role: 'Software Developer',
      company: 'Future Connections',
      dates: 'abr 2022 – feb 2024',
      location: 'Málaga',
      skills: [
        'React',
        'Angular',
        'Vue',
        'HTML',
        'SASS',
        'Node.js',
        'Flask',
        'PostgreSQL',
        'Jest',
        'React Testing Library',
        'Docker',
        'GitHub Actions',
      ],
      summary: 'Desarrollo de software para clientes de telecomunicaciones como Orange.',
      logo: '/logos/companies/future-connections.png',
      initials: 'FC',
    },
    {
      role: 'Desarrollador full-stack',
      company: 'Banco Santander',
      affiliation: 'Departamento de Innovación, a través de Avansis Consulting',
      dates: 'ene 2018 – mar 2022',
      location: 'Madrid',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'React',
        'Angular',
        'Vue',
        'Node.js',
        'Django',
        'Docker',
      ],
      summary:
        'Desarrollo full-stack para varios departamentos de Banco Santander en varios países: HTML, CSS, JavaScript y jQuery; desarrollo y migración de aplicaciones con React, Angular y Vue; backend con Node.js y Django; despliegue con Docker.',
      logo: '/logos/companies/santander.svg',
      initials: 'BS',
    },
    {
      role: 'Data Analyst',
      company: 'Ymedia',
      dates: 'ago 2017 – ene 2018',
      location: 'Madrid',
      skills: ['Analítica web', 'Estadística'],
      summary: 'Análisis de datos.',
      logo: '/logos/companies/ymedia.png',
      initials: 'YM',
    },
    {
      role: 'Trainee Analyst',
      company: 'Webedia',
      dates: 'feb 2017 – may 2017',
      location: 'Madrid',
      skills: ['Analítica web'],
      summary: 'Prácticas de análisis.',
      logo: '/logos/companies/webedia.png',
      initials: 'WE',
    },
  ] satisfies ExperienceItem[],
} as const

export const projects = {
  kicker: '03',
  title: 'Proyectos',
  visit: 'Visitar sitio',
  kind: 'Aplicación web',
  live: 'En producción',
  items: [
    {
      title: 'NexaChess',
      url: 'https://nexachess.com',
      subtitle: 'Plataforma de análisis y entrenamiento de partidas de Lichess y Chess.com',
      description:
        'Análisis con Stockfish, por fases y seguimiento del rendimiento.',
      tags: ['Ajedrez', 'Análisis', 'Web'],
      logo: '/logos/projects/nexachess.png',
      logoAlt: 'Logo de NexaChess',
      initials: 'NX',
      accent: '#7ee0c3',
    },
    {
      title: 'Vota sin ruido',
      url: 'https://votasinruido.es',
      subtitle: 'Comparador apartidista de propuestas de los partidos políticos',
      description: 'Organizadas por temas y con enlace a la fuente.',
      tags: ['Política', 'España', 'Comparador'],
      logo: '/logos/projects/votasinruido.svg',
      logoAlt: 'Logo de Vota sin ruido',
      initials: 'VR',
      accent: '#e4c58a',
    },
    {
      title: 'Extract Invoice',
      url: 'https://extractinvoice.io',
      subtitle: 'SaaS de extracción de datos de facturas con IA',
      description: 'Convierte PDF, escaneos y fotos de facturas en datos listos para revisar y exportar.',
      tags: ['SaaS', 'IA', 'Facturas'],
      logo: '/logos/projects/extractinvoice.png',
      logoAlt: 'Logo de Extract Invoice',
      initials: 'EI',
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
    'JavaScript (ES6+)',
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Python',
    'Django',
    'Docker',
    'AWS',
    'Tailwind CSS',
    'PostgreSQL',
    'Firebase',
    'Git',
    'Jest',
    'R',
  ],
  categories: [
    {
      index: '01',
      name: 'Lenguajes',
      tools: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SCSS/SASS', 'SQL', 'R'],
    },
    {
      index: '02',
      name: 'Frontend',
      tools: ['React', 'Angular', 'Vue', 'jQuery', 'Tailwind CSS'],
    },
    {
      index: '03',
      name: 'Backend',
      tools: ['Node.js', 'Flask', 'Django', 'REST APIs', 'microservicios', 'Firebase', 'PostgreSQL'],
    },
    {
      index: '04',
      name: 'Cloud y DevOps',
      tools: ['Docker', 'AWS', 'Tencent Cloud', 'GitHub Actions', 'CI/CD', 'Git', 'Linux & Bash'],
    },
    {
      index: '05',
      name: 'Calidad y método',
      tools: ['Jest', 'React Testing Library', 'Agile/Scrum'],
    },
    {
      index: '06',
      name: 'Datos',
      tools: ['Analítica web', 'SEO', 'Estadística'],
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
  certificationsLabel: 'Cursos',
  certifications: [
    {
      title: 'SEO Fundamentals',
      issuer: 'Udemy',
      dates: '2025',
    },
    {
      title: 'Marketing Digital',
      issuer: 'IAB',
      dates: '2016',
    },
    {
      title: 'Analítica Web',
      issuer: 'Google-EOI',
      dates: '2016',
    },
  ] satisfies CertificationItem[],
} as const

export const languages = {
  kicker: '06',
  title: 'Idiomas',
  items: [
    { name: 'Español', level: 'Nativo', flag: 'es' },
    { name: 'Inglés', level: 'Profesional básico', flag: 'en' },
    { name: 'Valenciano / Catalán', level: 'Nativo', flag: 'va' },
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
