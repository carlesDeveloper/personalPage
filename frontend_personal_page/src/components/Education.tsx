import { LuAward, LuGraduationCap } from 'react-icons/lu'
import { SiGoogle } from 'react-icons/si'
import { education } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="formacion" kicker={education.kicker} title={education.title} icon={<LuGraduationCap />}>
      <div className="bento bento-edu">
        {education.degrees.map((degree, index) => (
          <Reveal key={degree.title} delay={index * 0.08}>
            <article className="edu-card">
              <h3>
                <LuGraduationCap aria-hidden="true" />
                {degree.title}
              </h3>
              <p className="edu-meta">
                {degree.institution} · {degree.dates}
              </p>
              {degree.detail ? <p className="edu-detail">{degree.detail}</p> : null}
            </article>
          </Reveal>
        ))}
        {education.certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={0.16 + index * 0.08}>
            <article className="cert-card">
              <p className="certs-label">{education.certificationsLabel}</p>
              <h3>
                <LuAward aria-hidden="true" />
                {cert.title}
              </h3>
              <p className="cert-issuer">
                <SiGoogle aria-hidden="true" />
                {cert.issuer}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
