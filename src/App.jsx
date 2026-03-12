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
      </div>
    </Router>
  )
}

export default App