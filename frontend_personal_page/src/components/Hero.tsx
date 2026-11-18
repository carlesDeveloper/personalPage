import { useReducedMotion, motion } from 'framer-motion'
import { site } from '../data/content'
import { PinIcon } from './icons'

export function Hero() {
  const reduced = Boolean(useReducedMotion())

  const container = reduced
    ? undefined
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.08 },
        },
      }

  const item = reduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        variants={container}
        initial={reduced ? false : 'hidden'}
        animate={reduced ? undefined : 'show'}
      >
        <motion.p className="hero-kicker" variants={item}>
          <PinIcon />
          {site.location}
        </motion.p>
        <motion.h1 id="hero-title" variants={item}>
          Carles <em>Lloret Ramon</em>
        </motion.h1>
        <motion.p className="hero-role" variants={item}>
          {site.role}
        </motion.p>
        <motion.p className="hero-pitch" variants={item}>
          {site.pitch}
        </motion.p>
        <motion.div className="hero-ctas" variants={item}>
          <a className="btn btn-primary" href="#proyectos">
            {site.heroCtas.projects}
          </a>
          <a className="btn btn-ghost" href="#contacto">
            {site.heroCtas.contact}
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-photo-wrap"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
