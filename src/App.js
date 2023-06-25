import React from 'react'
import Aboutme from './Components/Aboutme'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Interests from './Components/Interests'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Services />
      <Interests />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App