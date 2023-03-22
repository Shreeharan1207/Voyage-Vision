import React from 'react'

import Hero from '../Components/Hero'
import serviceImg from '../Assets/1.jpg'
import classes from '../Components/Hero.module.css'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

const Service = () => {
  return (
    <>
    <Hero
        cName={classes.heroMid}
        heroImg={serviceImg}
        title="Service"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service