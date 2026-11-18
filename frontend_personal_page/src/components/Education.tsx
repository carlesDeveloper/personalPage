import { LuAward, LuGraduationCap } from 'react-icons/lu'
import { SiGoogle, SiUdemy } from 'react-icons/si'
import { education } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

function IssuerIcon({ issuer }: { issuer: string }) {
  if (issuer.startsWith('Google')) return <SiGoogle aria-hidden="true" />
  if (issuer === 'Udemy') return <SiUdemy aria-hidden="true" />
  return <LuAward aria-hidden="true" />
}

export function Education() {
  return (
    <Section id="formacion" kicker={education.kicker} title={education.title} icon={<LuGraduationCap />}>
      <div className="bento bento-edu">
        {education.degrees.map((degree, index) => (
          <Reveal key={degree.title} delay={index * 0.08}>
            <article className="edu-card">
              <h3>
                <LuGraduationCap aria-hidden="true" />
                <span>{degree.title}</span>
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
                <span>{cert.title}</span>
              </h3>
              <p className="cert-issuer">
                <IssuerIcon issuer={cert.issuer} />
                <span>
                  {cert.issuer}
                  {cert.dates ? ` · ${cert.dates}` : ''}
                </span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
