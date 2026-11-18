import { useReducedMotion, motion } from 'framer-motion'
import { experience, type ExperienceItem } from '../data/content'
import { Section } from './Section'

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const reduced = Boolean(useReducedMotion())

  return (
    <motion.li
      className="timeline-item"
      initial={reduced ? false : { opacity: 0, x: -22 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="timeline-dot" aria-hidden="true" />
      <p className="timeline-role">{item.role}</p>
      <p className="timeline-company">
        {item.company}
        {item.companyLegal ? ` (${item.companyLegal})` : ''}
      </p>
      <p className="timeline-meta">
        {item.dates}
        {' · '}
        {item.location}
        {item.type ? ` · ${item.type}` : ''}
      </p>
      {item.summary ? <p className="timeline-summary">{item.summary}</p> : null}
      {item.skills.length > 0 ? (
        <ul className="chips">
          {item.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.li>
  )
}

export function Experience() {
  return (
    <Section id="experiencia" kicker={experience.kicker} title={experience.title}>
      <ol className="timeline">
        {experience.items.map((item, index) => (
          <TimelineItem key={`${item.company}-${item.dates}`} item={item} index={index} />
        ))}
      </ol>
    </Section>
  )
}
