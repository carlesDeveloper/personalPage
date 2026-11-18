import { LuLayers } from 'react-icons/lu'
import { projects, type ProjectItem } from '../data/content'
import { ExternalIcon } from './icons'
import { LogoMark } from './LogoMark'
import { Reveal } from './Reveal'
import { Section } from './Section'

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <a
        className="project-card"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-badges">
          <span className="project-badge project-badge--kind">{projects.kind}</span>
          <span className="project-badge project-badge--live">
            <span className="project-live-dot" aria-hidden="true" />
            {projects.live}
          </span>
          {project.tags.map((tag) => (
            <span key={tag} className="project-badge">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-heading">
          <LogoMark
            className="project-logo"
            src={project.logo}
            alt={project.logoAlt}
            initials={project.initials}
          />
          <h3>
            {project.title}
            <ExternalIcon className="project-external" />
          </h3>
        </div>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
      </a>
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section
      id="proyectos"
      kicker={projects.kicker}
      title={projects.title}
      icon={<LuLayers />}
      align="center"
    >
      <div className="projects-grid">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.url} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
