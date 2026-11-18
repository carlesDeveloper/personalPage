import { useState, type CSSProperties } from 'react'
import { projects, type ProjectItem } from '../data/content'
import { ExternalIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(project.image) && !failed

  return (
    <Reveal delay={index * 0.08}>
      <article className="project-card">
        <a
          className="project-media"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--project-accent': project.accent } as CSSProperties}
        >
          {showImage ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="project-fallback">{project.title}</div>
          )}
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
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section id="proyectos" kicker={projects.kicker} title={projects.title}>
      <div className="projects-grid">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.url} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
