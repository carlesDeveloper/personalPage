import { LuCode } from 'react-icons/lu'
import { stack } from '../data/content'
import { BrandIcon } from './BrandIcon'
import { LogoMarquee } from './LogoMarquee'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" kicker={stack.kicker} title={stack.title} icon={<LuCode />}>
      <Reveal>
        <p className="contact-intro">{stack.intro}</p>
      </Reveal>
      <LogoMarquee />
      <div className="bento bento-stack">
        {stack.categories.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.05}>
            <article className="stack-card">
              <span className="stack-index">{category.index}</span>
              <h3 className="stack-name">{category.name}</h3>
              <ul className="stack-tools">
                {category.tools.map((tool) => (
                  <li key={tool}>
                    <BrandIcon name={tool} />
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
