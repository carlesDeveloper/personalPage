import { FaLinkedin } from 'react-icons/fa'
import { LuMessageCircle } from 'react-icons/lu'
import { SiCalendly, SiGithub } from 'react-icons/si'
import { contact, type ContactLink } from '../data/content'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { Section } from './Section'

function ContactIcon({ id }: { id: ContactLink['id'] }) {
  if (id === 'linkedin') return <FaLinkedin />
  if (id === 'github') return <SiGithub />
  return <SiCalendly />
}

export function Contact() {
  return (
    <Section id="contacto" kicker={contact.kicker} title={contact.title} icon={<LuMessageCircle />}>
      <Reveal>
        <p className="contact-intro">{contact.intro}</p>
      </Reveal>
      <div className="bento bento-contact">
        {contact.links.map((link, index) => (
          <Reveal key={link.id} delay={index * 0.08}>
            <Magnetic
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
            </Magnetic>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
