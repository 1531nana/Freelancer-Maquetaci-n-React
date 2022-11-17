import { useState } from 'react'
import './components/Header.css'
import './components/section1.css'
import './components/Contactme.css'
import './components/Portafolio.css'
import './components/AboutMe.css'
import './components/Footer.css'
import Header from './components/Header'
import { Portafolio } from './components/Portafolio'
import { Contactme } from './components/Contactme'
import { Section1 } from './components/section1'
import { AboutMe } from './components/aboutme'
import  Footer  from './components/Footer'


function App() {

  return (
    <div className="App">
      <Header/>
       <Section1 />
       < Portafolio/>
       <AboutMe />
       <Contactme />
       <Footer />
    </div>
  )
}

export default App
