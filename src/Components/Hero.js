import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Hero.module.css'

const Hero = (props) => {
    return (
        <>
            <div className={`${props.cName}`}>
                <img alt='HeroImg' src={props.heroImg}></img>


                <div className={classes.heroText}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <NavLink
                        href={props.url}
                        className={`${props.btnClass}`}>
                        {props.buttonText}
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Hero