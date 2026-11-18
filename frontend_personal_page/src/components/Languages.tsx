import { languages } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Languages() {
  return (
    <Section id="idiomas" kicker={languages.kicker} title={languages.title}>
      <div className="lang-list">
        {languages.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <div className="lang-row">
              <div className="lang-top">
                <span>{item.name}</span>
                <span className="lang-level">{item.level}</span>
              </div>
              <div
                className="lang-track"
                role="meter"
                aria-valuemin={0}
                aria-valuemax={1}
                aria-valuenow={item.fill}
                aria-label={`${item.name}: ${item.level}`}
              >
                <div className="lang-fill" style={{ width: `${item.fill * 100}%` }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
