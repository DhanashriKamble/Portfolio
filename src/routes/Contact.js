import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Form1 from '../components/Form1'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT." text="Lets have a chat"/>
      <Form1/>
      <Footer/>
    </div>
  )
}

export default Contact