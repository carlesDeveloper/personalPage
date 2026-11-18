import { LuLanguages } from 'react-icons/lu'
import { FlagSpain, FlagUnitedKingdom, FlagValencia } from './Flags'
import { languages, type LanguageFlag } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

const FLAGS: Record<LanguageFlag, typeof FlagSpain> = {
  es: FlagSpain,
  en: FlagUnitedKingdom,
  va: FlagValencia,
}

export function Languages() {
  return (
    <Section id="idiomas" kicker={languages.kicker} title={languages.title} icon={<LuLanguages />}>
      <div className="bento bento-lang">
        {languages.items.map((item, index) => {
          const Flag = FLAGS[item.flag]
          return (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="lang-card">
                <Flag className="lang-flag" title={`Bandera de ${item.name}`} />
                <div>
                  <h3>{item.name}</h3>
                  <p className="lang-level">{item.level}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
