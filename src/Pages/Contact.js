import React from 'react'

import Hero from '../Components/Hero'
import contactImg from '../Assets/3.jpg'
import classes from '../Components/Hero.module.css'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <>
    <Hero
        cName={classes.heroMid}
        heroImg={contactImg}
        title="Contact"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact