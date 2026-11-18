import { education } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="formacion" kicker={education.kicker} title={education.title}>
      <div className="education-grid">
        {education.degrees.map((degree, index) => (
          <Reveal key={degree.title} delay={index * 0.08}>
            <article className="edu-card">
              <h3>{degree.title}</h3>
              <p className="edu-meta">
                {degree.institution} · {degree.dates}
              </p>
              {degree.detail ? <p className="edu-detail">{degree.detail}</p> : null}
            </article>
          </Reveal>
        ))}
      </div>
      <div className="certs">
        <p className="certs-label">{education.certificationsLabel}</p>
        <div className="education-grid">
          {education.certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <article className="cert-card">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
