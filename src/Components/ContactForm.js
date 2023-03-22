import React, { useState } from 'react'
import useInput from '../hooks/use-input';

import classes from './ContactForm.module.css'
const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState();

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

  const {
    value : message,
    isValid : msglIsValid,
    valueChangeHandler : msgChangeHandler,
    reset : msgReset
  } = useInput(value => value.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(nameIsValid || emailIsValid || sublIsValid || msglIsValid){

      setIsSuccess(true);
      nameReset();
      emailReset(); 
      subReset();
      msgReset();
    }else{
      alert("All feilds are mandatory");
    }
  }

  const nameBlurHandler = () => {
    setIsSuccess(false);
  }

  return (
    <div className={classes.formDiv}>
        <h1>Send a message to us!</h1>
        <form onSubmit={formSubmitHandler}>
            <input type="textbox" value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} placeholder="Name"/>
            <input type="email" value={email} onChange={emailChangeHandler} placeholder="Email"/>
            <input type="textbox" value={subject} onChange={subChangeHandler} placeholder="Subject"/>
            <textarea placeholder="Message" rows="4" value={message} onChange = {msgChangeHandler}  />
            <button>Send Message</button>
        </form>
        {isSuccess && 
          <div className={classes.success}>
              <i className="fa-regular fa-circle-check"></i>
              <p> Sent Successfully </p>
          </div>}
    </div>
  )
}

export default ContactForm