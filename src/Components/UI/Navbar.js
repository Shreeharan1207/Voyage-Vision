import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuItems from './MenuItems'

import classes from './Navbar.module.css'

const Navbar = () => {
    const [changeIcon, setChangeIcon] = useState(false);
    const iconChangeHandler = () => {
        setChangeIcon(!changeIcon);
    }
    return (
        <header>
            <nav className={classes.navbarItems}>
                <h1 className={classes.navbarLogo}>Travel</h1>

                <div className={classes.menuIcon} onClick={iconChangeHandler}>
                    <i className={changeIcon ? "fas fa-times" : "fas fa-bars"}></i>
                    {/* <i className="fas fa-times"></i> */}
                </div>
                <ul className={!changeIcon ? classes.navItems : classes.navItems + ' ' + classes.active}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={classes[item.cName]} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
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