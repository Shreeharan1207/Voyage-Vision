import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout

/* <Outlet/> component marks the place where the child route elements should be rendered to*/