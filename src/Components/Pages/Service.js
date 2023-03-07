import React from 'react'

import Hero from '../Hero'
import serviceImg from '../../Assets/1.jpg'
import classes from '../Hero.module.css'
import Footer from '../Footer'
import Trip from '../Trip'

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