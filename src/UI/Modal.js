import React from 'react'
import classes from './Modal.module.css'

const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClear} >
    <div className={classes.body} >
        <div className={classes.header}>
            <div onClick={props.onClear}><i className="fa-solid fa-xmark"></i></div>
            <i className={props.icon}></i>
        </div>
        <div className={classes.text}>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    </div>
  )
}



export default Modal