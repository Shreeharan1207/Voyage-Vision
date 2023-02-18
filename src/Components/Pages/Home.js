import React from 'react'


import Hero from '../Hero'
import heroImg from '../../Assets/2.jpg'
import classes from '../Hero.module.css'

const Home = () => {
  return (
    <>
      <Hero
        cName={classes.hero}
        heroImg={heroImg}
        title="Your Journey Your Story"
        text="Choose your favourite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass={classes.show}
      />
    </>
  )
}

export default Home