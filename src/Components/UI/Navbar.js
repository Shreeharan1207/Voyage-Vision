import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import MenuItems from './MenuItems'

import classes from './Navbar.module.css'

const Navbar = () => {
    const [changeIcon, setChangeIcon] = useState(false);
    const iconChangeHandler = () => {
        setChangeIcon(!changeIcon);
    }
    const hideMenu = () => {
        setChangeIcon(false)
    }
    return (
        <header>
            <nav className={classes.navbarItems}>
                <h6 className={classes.navbarLogo}>Voyage Vision</h6>

                <div className={classes.menuIcon} onClick={iconChangeHandler}>
                    <i className={changeIcon ? "fas fa-times" : "fas fa-bars"}></i>
                    {/* <i className="fas fa-times"></i> */}
                </div>
                <ul className={!changeIcon ? classes.navItems : classes.navItems + ' ' + classes.active}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className= {classes[item.cName]}
                                     to={item.url} 
                                     onClick={hideMenu}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    }
                    )}
                    <button>Sign Up</button>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar