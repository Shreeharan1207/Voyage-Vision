import React from 'react'

import Hero from '../Hero'
import contactImg from '../../Assets/3.jpg'
import classes from '../Hero.module.css'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
    <Hero
        cName={classes.heroMid}
        heroImg={contactImg}
        title="Contact"
      />
      <Footer/>
    </>
  )
}

export default Contact