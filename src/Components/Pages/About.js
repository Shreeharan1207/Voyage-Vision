import React from 'react'

import Hero from '../Hero'
import aboutImg from '../../Assets/1.jpg'
import classes from '../Hero.module.css'
import Footer from '../Footer'

const About = () => {
  return (
    <>
    <Hero
        cName={classes.heroMid}
        heroImg={aboutImg}
        title="About Us"
      />
      <Footer/>
    </>
  )
}

export default About