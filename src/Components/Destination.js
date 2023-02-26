import React from 'react'


import classes from './Destination.module.css'
import Valcano1 from '../Assets/5.jpg'
import Valcano2 from '../Assets/6.jpg'

const Destination = () => {
    return (
        <div className={classes.destination}>
            <h1>
                Popular Destination
            </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <div className={classes.desc}>
                <div className={classes.descText}>
                    <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon, Mt. Taal boasts
                        a volcano inside a lake inside an Island. If you fancy
                        a closer look, the hike up to the crater is a mere
                        45 minutes and is easy enough for beginners. Guides
                        will assist you most of the way, and you'll see the
                        peculiar environment found on an active volcano,
                        including volcanic rocks and steam vents. The hike can
                        be dusty and hot so plan for on early morning trip, and
                        then unwind with some bulalo before heading back home!</p>
                </div>
                <div className={classes.image}>
                    <img alt="valcano1" src={Valcano1}/>
                    <img alt="valcano2" src={Valcano2}/>
                </div>
            </div>
        </div>
    )
}

export default Destination