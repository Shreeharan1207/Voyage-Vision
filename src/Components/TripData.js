import React from 'react'

import classes from './Trip.module.css'

const TripData = (props) => {
  return (
    <div className={classes.tCard}>
        <div className={classes.tImage}>
            <img alt="TripImage" src={props.image}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData