import React from 'react'


import Hero from '../Components/Hero'
import heroImg from '../Assets/2.jpg'
import classes from '../Components/Hero.module.css'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

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
      <Destination />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Home