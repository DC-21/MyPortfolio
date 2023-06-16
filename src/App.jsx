import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Portfolio/>
     <Footer/>
    </>
  )
}

export default App
