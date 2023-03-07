import React from 'react'

import TripData from './TripData'
import classes from './Trip.module.css'
import EffielTower from '../Assets/7.jpg'
import Egypt from '../Assets/8.jpg'
import TajMahal from '../Assets/9.jpg'

const Trip = () => {
  return (
    <div className={classes.trip}>
      <h1>Recent Trips</h1>
      <p>You can discover unique
        destinations using Google Maps.</p>
      <div className={classes.tripCard}>
        <TripData
          image={EffielTower}
          title="Trip in Paris"
          text="For 130 years, the Eiffel Tower 
          has been a powerful and distinctive symbol 
          of the city of Paris, and by extension, of 
          France. At first, when it was built for the 
          1889 World's Fair, it impressed the entire 
          world by its stature and daring design, and 
          symbolized French know-how and industrial genius"
        />

        <TripData
          image={Egypt}
          title="Trip in Egypt"
          text="For 130 years, the Eiffel Tower 
          has been a powerful and distinctive symbol 
          of the city of Paris, and by extension, of 
          France. At first, when it was built for the 
          1889 World's Fair, it impressed the entire 
          world by its stature and daring design, and 
          symbolized French know-how and industrial genius"
        />

        <TripData
          image={TajMahal}
          title="Trip in Agra"
          text="For 130 years, the Eiffel Tower 
          has been a powerful and distinctive symbol 
          of the city of Paris, and by extension, of 
          France. At first, when it was built for the 
          1889 World's Fair, it impressed the entire 
          world by its stature and daring design, and 
          symbolized French know-how and industrial genius"
        />
      </div>
    </div>
  )
}

export default Trip