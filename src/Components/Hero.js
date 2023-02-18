import React from 'react'
import classes from './Hero.module.css'

const Hero = (props) => {
    return (
        <>
            <div className={`${props.cName}`}>
                <img alt='HeroImg' src={props.heroImg}></img>


                <div className={classes.heroText}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a
                        href={props.url}
                        className={`${props.btnClass}`}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero