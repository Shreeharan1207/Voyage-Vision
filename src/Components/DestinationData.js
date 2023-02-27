import React from 'react'

import classes from './Destination.module.css'

const DestinationData = (props) => {
    return (
        <div className={props.className}>
            <div className={classes.descText}>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className={classes.image}>
                <img alt="valcano1" src={props.img1} />
                <img alt="valcano2" src={props.img2} />
            </div>
        </div>
    )
}

export default DestinationData