import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { intro } from '../data/content'
import { useMotionProfile } from '../hooks/useMotionProfile'

export function IntroOverlay() {
  const { animate } = useMotionProfile()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!animate) return
    setVisible(true)
    document.body.classList.add('intro-lock')
    const hide = window.setTimeout(() => setVisible(false), 1500)
    const unlock = window.setTimeout(() => document.body.classList.remove('intro-lock'), 2000)
    return () => {
      window.clearTimeout(hide)
      window.clearTimeout(unlock)
      document.body.classList.remove('intro-lock')
    }
  }, [animate])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.p
            className="intro-mono"
            initial={{ opacity: 0, y: 12, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.18em' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {intro.monogram}
          </motion.p>
          <motion.p
            className="intro-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            {intro.label}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
