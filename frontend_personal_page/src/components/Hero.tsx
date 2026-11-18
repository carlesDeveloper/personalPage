import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/content'
import { PinIcon } from './icons'

export function Hero() {
  const reduced = Boolean(useReducedMotion())

  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker reveal-1">
          <PinIcon />
          {site.location}
        </p>
        <h1 id="hero-title" className="reveal-2">
          Carles <em>Lloret Ramon</em>
        </h1>
        <p className="hero-role reveal-3">{site.role}</p>
        <p className="hero-pitch reveal-4">{site.pitch}</p>
        <div className="hero-ctas reveal-5">
          <a className="btn btn-primary" href="#proyectos">
            {site.heroCtas.projects}
          </a>
          <a className="btn btn-ghost" href="#contacto">
            {site.heroCtas.contact}
          </a>
        </div>
      </div>
      <motion.div
        className="hero-photo-wrap reveal-3"
        initial={reduced ? false : { y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-photo-ring" />
        <img
          className="hero-photo"
          src={site.photo.src}
          alt={site.photo.alt}
          width={480}
          height={600}
          fetchPriority="high"
        />
      </motion.div>
    </section>
  )
}
