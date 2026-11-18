import { LuMapPin, LuUser } from 'react-icons/lu'
import { about, site, stats } from '../data/content'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="sobre-mi" kicker={about.kicker} title={about.title} icon={<LuUser />}>
      <div className="bento bento-about">
        <Reveal className="bento-copy">
          <p>{about.paragraphs[0]}</p>
        </Reveal>
        {stats.items.map((item, index) => (
          <Reveal key={item.label} delay={0.08 + index * 0.06} className="stat-card">
            <CountUp value={item.value} suffix={item.suffix} />
            <span className="stat-label">{item.label}</span>
          </Reveal>
        ))}
        <Reveal delay={0.12} className="bento-note">
          <p>{about.paragraphs[1]}</p>
        </Reveal>
        <Reveal delay={0.18} className="bento-note bento-note--gold">
          <p>{about.paragraphs[2]}</p>
        </Reveal>
        <Reveal delay={0.22} className="bento-place">
          <LuMapPin aria-hidden="true" />
          <div>
            <strong>{site.location}</strong>
            <span>{site.role}</span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
