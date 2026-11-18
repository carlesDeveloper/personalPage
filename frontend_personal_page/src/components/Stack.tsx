import { stack } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" kicker={stack.kicker} title={stack.title}>
      <Reveal>
        <p className="contact-intro">{stack.intro}</p>
      </Reveal>
      <div className="stack-list">
        {stack.categories.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.05}>
            <div className="stack-row">
              <span className="stack-index">{category.index}</span>
              <span className="stack-name">{category.name}</span>
              <p className="stack-tools">
                {category.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
