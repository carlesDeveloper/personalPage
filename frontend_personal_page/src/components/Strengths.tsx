import { strengths } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Strengths() {
  return (
    <Section id="fortalezas" kicker={strengths.kicker} title={strengths.title}>
      <Reveal>
        <p className="strength-intro">{strengths.intro}</p>
      </Reveal>
      <ul className="strength-grid">
        {strengths.items.map((item, index) => (
          <li key={item}>
            <Reveal delay={index * 0.04}>
              <span className="strength-chip">{item}</span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
