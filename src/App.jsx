import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import { Projects } from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experiences />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
