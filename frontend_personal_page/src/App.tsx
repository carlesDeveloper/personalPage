import { About } from './components/About'
import { AuroraBackground } from './components/AuroraBackground'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { IntroOverlay } from './components/IntroOverlay'
import { Languages } from './components/Languages'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { SkipLink } from './components/SkipLink'
import { Stack } from './components/Stack'
import { Strengths } from './components/Strengths'
import { sectionIds } from './data/content'

function App() {
  return (
    <div className="site">
      <SkipLink />
      <IntroOverlay />
      <AuroraBackground />
      <Nav sectionIds={sectionIds} />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Languages />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
