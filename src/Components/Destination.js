import React from 'react'


import classes from './Destination.module.css'
import maldive1 from '../Assets/maldive1.jpg'
import maldive2 from '../Assets/maldive3.jpg'
import paris1 from '../Assets/7.jpg'
import paris2 from '../Assets/8.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
    return (
        <div className={classes.destination}>
            <h1>
                Popular Destination
            </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <DestinationData className={classes.firstDesc}
              heading = "Maldives"
              text = "Maldives has the most beautiful tropical islands in the world. It is best 
              known for its serene natural environment that includes the azure blue ocean, clean air, 
              and white sandy beaches. It is also very much famous 
              for its water based adventure sports like swimming, scuba diving, fishing, water skiing, 
              kiteboarding, snorkelling, and windsurfing. Luxury resorts and water villas also make  
              Maldives a hit destination amongst travellers."
              img1 = {maldive1} 
              img2 = {maldive2}
            />
            <DestinationData className={classes.firstDescReverse}
              heading = "Paris, France"
              text = "Paris is one of the most beautiful cities in the world. It is known worldwide 
              for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation 
              of being a romantic and cultural city. The city is also known for its high-quality gastronomy 
              and the terraces of its cafés. French food is impossible to resist in the city of light. Famous 
              foods in Paris include Croissants, Steak-Frites, Macarons and Fromage"
              img1 = {paris1} 
              img2 = {paris2}
            />
            
        </div>
    )
}

export default Destination