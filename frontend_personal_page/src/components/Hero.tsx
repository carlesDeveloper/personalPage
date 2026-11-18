import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../data/content'
import { useMotionProfile } from '../hooks/useMotionProfile'
import { PinIcon } from './icons'
import { Magnetic } from './Magnetic'
import { ScrambleText } from './ScrambleText'
import { Typewriter } from './Typewriter'

export function Hero() {
  const { animate } = useMotionProfile()
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], animate ? [36, -36] : [0, 0])

  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker reveal-1">
          <PinIcon />
          {site.location}
        </p>
        <h1 id="hero-title" className="reveal-2">
          <ScrambleText text="Carles " delay={1600} />
          <em>
            <ScrambleText text="Lloret Ramon" delay={1720} />
          </em>
        </h1>
        <p className="hero-role reveal-3">{site.role}</p>
        <Typewriter className="hero-pitch reveal-4" text={site.pitch} delay={2300} />
        <div className="hero-ctas reveal-5">
          <Magnetic className="btn btn-primary" href="#proyectos">
            {site.heroCtas.projects}
          </Magnetic>
          <Magnetic className="btn btn-ghost" href="#contacto">
            {site.heroCtas.contact}
          </Magnetic>
        </div>
      </div>
      <motion.div
        ref={photoRef}
        className="hero-photo-wrap reveal-3"
        style={{ y }}
        initial={animate ? { scale: 0.96 } : false}
        animate={{ scale: 1 }}
        transition={{ duration: animate ? 0.8 : 0, delay: animate ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-photo-ring" />
        <img
          className="hero-photo"
          src={site.photo.src}
          alt={site.photo.alt}
          width={400}
          height={400}
          fetchPriority="high"
        />
      </motion.div>
    </section>
  )
}
