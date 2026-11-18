import { contact, type ContactLink } from '../data/content'
import { CalendarIcon, GitHubIcon, LinkedInIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

function ContactIcon({ id }: { id: ContactLink['id'] }) {
  if (id === 'linkedin') return <LinkedInIcon />
  if (id === 'github') return <GitHubIcon />
  return <CalendarIcon />
}

export function Contact() {
  return (
    <Section id="contacto" kicker={contact.kicker} title={contact.title}>
      <Reveal>
        <p className="contact-intro">{contact.intro}</p>
      </Reveal>
      <div className="contact-grid">
        {contact.links.map((link, index) => (
          <Reveal key={link.id} delay={index * 0.08}>
            <a
              className="contact-card"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                <ContactIcon id={link.id} />
                {link.label}
              </strong>
              <span>{link.description}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
