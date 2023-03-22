import React from 'react'

import Hero from '../Components/Hero'
import aboutImg from '../Assets/1.jpg'
import classes from '../Components/Hero.module.css'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

const About = () => {
  return (
    <>
    <Hero
        cName={classes.heroMid}
        heroImg={aboutImg}
        title="About Us"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About