import type { CSSProperties } from 'react'
import { LuLayers } from 'react-icons/lu'
import { projects, type ProjectItem } from '../data/content'
import { ExternalIcon } from './icons'
import { LogoMark } from './LogoMark'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { TiltCard } from './TiltCard'

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: ProjectItem
  index: number
  featured: boolean
}) {
  return (
    <Reveal delay={index * 0.08} className={featured ? 'project-featured' : undefined}>
      <TiltCard featured={featured}>
        <article className="project-card">
          <a
            className="project-media"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${projects.visit} ${project.title}`}
            style={{ '--project-accent': project.accent } as CSSProperties}
          >
            <LogoMark
              className="project-logo"
              src={project.logo}
              alt={project.logoAlt}
              initials={project.initials}
            />
          </a>
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects.visit}
              <ExternalIcon />
            </a>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section id="proyectos" kicker={projects.kicker} title={projects.title} icon={<LuLayers />}>
      <div className="projects-grid">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.url}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
    </Section>
  )
}
