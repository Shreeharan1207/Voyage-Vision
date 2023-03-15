import React from 'react'
import useInput from './hooks/use-input';

import classes from './ContactForm.module.css'
const ContactForm = () => {

  const {
    value : name,
    isValid : nameIsValid,
    valueChangeHandler : nameChangeHandler,
    reset : nameReset
  } = useInput(value => value.trim() !== "");

  const {
    value : email,
    isValid : emailIsValid,
    valueChangeHandler : emailChangeHandler,
    reset : emailReset
  } = useInput(value => value.includes('@'));

  const {
    value : subject,
    isValid : sublIsValid,
    valueChangeHandler : subChangeHandler,
    reset : subReset
  } = useInput(value => value.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!nameIsValid || !emailIsValid || !sublIsValid){
      alert("All field must be filled");
    }else{
      nameReset();
      emailReset(); 
      subReset();
    }

    
  }
  return (
    <div className={classes.formDiv}>
        <h1>Send a message to us!</h1>
        <form onSubmit={formSubmitHandler}>
            <input type="textbox" value={name} onChange={nameChangeHandler} placeholder="Name"/>
            <input type="email" value={email} onChange={emailChangeHandler} placeholder="Email"/>
            <input type="textbox" value={subject} onChange={subChangeHandler} placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"/>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm