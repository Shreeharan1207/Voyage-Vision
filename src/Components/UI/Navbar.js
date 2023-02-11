import React from 'react'
import { Link } from 'react-router-dom'

import MenuItems from './MenuItems'

import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <nav className={classes.navbarItems}>
                <h1 className={classes.navbarLogo}>Travel</h1>
                <ul className={classes.navItems}>
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