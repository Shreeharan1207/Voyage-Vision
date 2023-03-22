import React from 'react'

import TripData from './TripData'
import classes from './Trip.module.css'
import dubai from '../Assets/dubai.jpg'
import sydney from '../Assets/sydney.jpg'
import TajMahal from '../Assets/9.jpg'

const Trip = () => {
  return (
    <div className={classes.trip}>
      <h1>Key places to explore</h1>
      <p>You can discover unique
        destinations using Google Maps.</p>
      <div className={classes.tripCard}>
        <TripData
          image={dubai}
          title="Dubai, UAE"
          text="This modern metropolis is home to some 
                of the world's most luxurious hotels, 
                shopping malls, and entertainment venues, 
                as well as unique cultural experiences like 
                camel rides and desert safaris."
          location = "Tourist place in dubai"    
        />


        <TripData
          image={TajMahal}
          title="Agra, India"
          text="Known for its iconic attraction,the Taj Mahal, 
          a UNESCO World Heritage Site and one of the most famous 
          landmarks in the world, showcasing the Mughal architecture 
          and art. It is a must-visit destination for anyone interested 
          in history, architecture, and culture."
          location = "Tourist place in agra"
        />

        <TripData
          image={sydney}
          title="Sydney, Australia"
          text="The iconic Opera House and Harbour Bridge 
                are just two of the many reasons to visit 
                Sydney, which also boasts stunning beaches, 
                a vibrant arts scene, and a laid-back Aussie vibe."
          location= "Tourist place in Sydney"
        />
      </div>
    </div>
  )
}

export default Trip