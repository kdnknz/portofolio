import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { portfolioData } from './database.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certificate from './components/Certificate.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Others from './components/Others.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import MobileBottomNav from './components/MobileBottomNav.jsx'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <main className="main-content" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={
          <Hero data={portfolioData.personal} social={portfolioData.social} />
        } />
        <Route path="/about" element={
          <About data={portfolioData.personal} />
        } />
        <Route path="/skills" element={
          <Skills data={portfolioData.skills} />
        } />
        <Route path="/experience" element={
          <Experience data={portfolioData.experience} />
        } />
        <Route path="/certificate" element={
          <Certificate data={portfolioData.certificates} />
        } />
        <Route path="/others" element={
          <Others />
        } />
        <Route path="/projects" element={
          <Projects data={portfolioData.projects} />
        } />
        <Route path="/education" element={
          <Education data={portfolioData.education} />
        } />
        <Route path="/services" element={
          <Services data={portfolioData.services} />
        } />
        <Route path="/about" element={
          <About data={portfolioData.personal} />
        } />
        <Route path="/contact" element={
          <Contact data={portfolioData.personal} social={portfolioData.social} />
        } />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <Header data={portfolioData} />
        <AnimatedRoutes />
        <Footer data={portfolioData.personal} />
        <MobileBottomNav />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/62895701239090"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Hubungi via WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="#fff" width="28" height="28">
            <path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.472.66 4.876 1.912 6.988L2 30l7.188-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.614a11.57 11.57 0 0 1-5.9-1.612l-.424-.252-4.388 1.15 1.172-4.28-.276-.44a11.56 11.56 0 0 1-1.774-6.18c0-6.394 5.204-11.598 11.598-11.598 6.394 0 11.598 5.204 11.598 11.598-.002 6.396-5.206 11.614-11.606 11.614zm6.36-8.684c-.348-.174-2.064-1.02-2.384-1.136-.32-.116-.552-.174-.784.174-.232.348-.9 1.136-1.104 1.368-.204.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598-.204-.01-.436-.012-.668-.012s-.61.088-.93.436c-.32.348-1.22 1.194-1.22 2.91s1.248 3.376 1.422 3.61c.174.232 2.456 3.75 5.952 5.258.832.36 1.482.574 1.988.736.836.264 1.596.228 2.196.138.67-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.204-1.66-.088-.146-.32-.232-.668-.406z"/>
          </svg>
        </a>
      </div>
    </Router>
  )
}

export default App