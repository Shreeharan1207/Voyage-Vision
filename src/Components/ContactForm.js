import React from 'react'

import classes from './ContactForm.module.css'
const ContactForm = () => {
  return (
    <div className={classes.formDiv}>
        <h1>Send a message to us!</h1>
        <form>
            <input type="textbox" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="textbox" placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"/>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm