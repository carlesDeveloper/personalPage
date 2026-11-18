import type { IconType } from 'react-icons'
import {
  LuBookOpen,
  LuChartBar,
  LuHeart,
  LuMessageSquare,
  LuSparkles,
  LuTarget,
} from 'react-icons/lu'
import { strengths } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

const STRENGTH_ICONS: Record<string, IconType> = {
  Analytical: LuChartBar,
  Learner: LuBookOpen,
  Communication: LuMessageSquare,
  Achiever: LuTarget,
  Empathy: LuHeart,
  Positivity: LuSparkles,
}

export function Strengths() {
  return (
    <Section id="fortalezas" kicker={strengths.kicker} title={strengths.title} icon={<LuSparkles />}>
      <Reveal>
        <p className="strength-intro">{strengths.intro}</p>
      </Reveal>
      <ul className="bento bento-strengths">
        {strengths.items.map((item, index) => {
          const Icon = STRENGTH_ICONS[item] ?? LuSparkles
          return (
            <li key={item}>
              <Reveal delay={index * 0.04}>
                <span className="strength-chip">
                  <Icon aria-hidden="true" />
                  <span>{item}</span>
                </span>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
