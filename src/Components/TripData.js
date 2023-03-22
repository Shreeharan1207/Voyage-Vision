import React from 'react'

import classes from './Trip.module.css'

const TripData = (props) => {
  const showMap = () => {
    window.open("https://maps.google.com?q=" + props.location);
  }
  return (
    <div className={classes.tCard}>
        <div className={classes.tImage}>
            <img alt="TripImage" src={props.image} onClick={showMap}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData