import { about } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="sobre-mi" kicker={about.kicker} title={about.title}>
      <div className="about-grid">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 0.08}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
