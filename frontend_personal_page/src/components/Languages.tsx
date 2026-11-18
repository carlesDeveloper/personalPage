import { languages } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Languages() {
  return (
    <Section id="idiomas" kicker={languages.kicker} title={languages.title}>
      <div className="lang-list">
        {languages.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <article className="lang-card">
              <h3>{item.name}</h3>
              <p className="lang-level">{item.level}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
