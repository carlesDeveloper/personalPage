import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { LuBriefcase, LuCalendar, LuMapPin } from 'react-icons/lu'
import { experience, type ExperienceItem } from '../data/content'
import { BrandIcon } from './BrandIcon'
import { LogoMark } from './LogoMark'
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
      <div className="timeline-head">
        <LogoMark
          className="company-mark"
          src={item.logo}
          alt={`Logo de ${item.company}`}
          initials={item.initials}
        />
        <div className="timeline-copy">
          <p className="timeline-role">
            <LuBriefcase aria-hidden="true" />
            {item.role}
          </p>
          <p className="timeline-company">
            {item.company}
            {item.companyLegal ? ` (${item.companyLegal})` : ''}
          </p>
          {item.affiliation ? <p className="timeline-affiliation">{item.affiliation}</p> : null}
        </div>
      </div>
      <p className="timeline-meta">
        <LuCalendar aria-hidden="true" />
        {item.dates}
        {' · '}
        <LuMapPin aria-hidden="true" />
        {item.location}
        {item.type ? ` · ${item.type}` : ''}
      </p>
      {item.summary ? <p className="timeline-summary">{item.summary}</p> : null}
      {item.skills.length > 0 ? (
        <ul className="chips">
          {item.skills.map((skill) => (
            <li key={skill} className="chip">
              <BrandIcon name={skill} />
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.li>
  )
}

export function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const reduced = Boolean(useReducedMotion())
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.25'],
  })

  return (
    <Section id="experiencia" kicker={experience.kicker} title={experience.title} icon={<LuBriefcase />}>
      <div className="timeline-wrap">
        <div className="timeline-track" aria-hidden="true">
          <motion.div
            className="timeline-progress"
            style={{ scaleY: reduced ? 1 : scrollYProgress }}
          />
        </div>
        <ol ref={ref} className="timeline">
          {experience.items.map((item, index) => (
            <TimelineItem key={`${item.company}-${item.dates}`} item={item} index={index} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
