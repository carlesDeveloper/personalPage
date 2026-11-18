import { LuGlobe, LuLanguages, LuMessageCircle, LuMessagesSquare } from 'react-icons/lu'
import { languages } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

const LANG_ICONS = [LuMessageCircle, LuMessagesSquare, LuGlobe]

export function Languages() {
  return (
    <Section id="idiomas" kicker={languages.kicker} title={languages.title} icon={<LuLanguages />}>
      <div className="bento bento-lang">
        {languages.items.map((item, index) => {
          const Icon = LANG_ICONS[index] ?? LuGlobe
          return (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="lang-card">
                <Icon aria-hidden="true" />
                <h3>{item.name}</h3>
                <p className="lang-level">{item.level}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
