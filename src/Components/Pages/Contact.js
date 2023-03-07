import React from 'react'

import Hero from '../Hero'
import contactImg from '../../Assets/3.jpg'
import classes from '../Hero.module.css'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

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