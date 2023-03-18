import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.top}>
                <div>
                    <h1>Voyage Vision</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <NavLink to='/'>
                        <i className="fa-brands fa-facebook-square"></i>
                    </NavLink>
                    <NavLink to='/'>
                        <i className="fa-brands fa-instagram-square"></i>
                    </NavLink>
                    <NavLink to='/'>
                        <i className="fa-brands fa-youtube-square"></i>
                    </NavLink>    
                    <NavLink to='/'>
                        <i className="fa-brands fa-twitter-square"></i>
                    </NavLink>
                </div>
            </div>

            <div className={classes.bottom}>
                <div>
                    <h4>Project</h4>
                    <NavLink to='/'>Changelog</NavLink>
                    <NavLink to='/'>Status</NavLink>
                    <NavLink to='/'>License</NavLink>
                    <NavLink to='/'>All Versions</NavLink>
                </div>

                <div>
                    <h4>Community</h4>
                    <NavLink to='/'>GitHub</NavLink>
                    <NavLink to='/'>Issues</NavLink>
                    <NavLink to='/'>Project</NavLink>
                    <NavLink to='/'>Twitter</NavLink>
                </div>

                <div>
                    <h4>Help</h4>
                    <NavLink to='/'>Support</NavLink>
                    <NavLink to='/'>Troubleshooting</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </div>

                <div>
                    <h4>Others</h4>
                    <NavLink to='/'>Terms of Services</NavLink>
                    <NavLink to='/'>Privacy Policy</NavLink>
                    <NavLink to='/'>License</NavLink>
                </div>
                
            </div>
        </div>
    )
}

export default Footer