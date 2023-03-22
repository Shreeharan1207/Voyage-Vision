import React, { useState } from 'react'
import useInput from '../hooks/use-input';
import { saveData } from '../store/fetchData';
import Modal from '../UI/Modal';

import classes from './ContactForm.module.css'
const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState();
  const [errorModal, setErrorModal] = useState(false);

  const {
    value: name,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset
  } = useInput(value => value.includes('@'));

  const {
    value: subject,
    isValid: sublIsValid,
    valueChangeHandler: subChangeHandler,
    reset: subReset
  } = useInput(value => value.trim() !== "");

  const {
    value: message,
    isValid: msglIsValid,
    valueChangeHandler: msgChangeHandler,
    reset: msgReset
  } = useInput(value => value.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (nameIsValid || emailIsValid || sublIsValid || msglIsValid) {
      const feedback = {
        name: name,
        mail: email,
        sub: subject,
        msg: message
      };
      saveData(feedback, /*here pass your database url for storing feedback*/);
      setIsSuccess(true);
      nameReset();
      emailReset();
      subReset();
      msgReset();
    } else {
      setErrorModal(true);
    }
  }

  const nameBlurHandler = () => {

    setIsSuccess(false);
  }

  const modalHandler = () => {
    setErrorModal(false);
  }

  return (
    <div>
      {errorModal && <Modal icon="fa-regular fa-circle-xmark" heading="Attention!" text="All fields are mandatory" onClear={modalHandler} />}
      <div className={classes.formDiv}>
        <h1>Send a message to us!</h1>
        <form onSubmit={formSubmitHandler}>
          <input type="textbox" value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} placeholder="Name" />
          <input type="textbox" value={email} onChange={emailChangeHandler} placeholder="Email" />
          <input type="textbox" value={subject} onChange={subChangeHandler} placeholder="Subject" />
          <textarea placeholder="Message" rows="4" value={message} onChange={msgChangeHandler} />
          <button>Send Message</button>
        </form>
        {isSuccess &&
          <div className={classes.success}>
            <i className="fa-regular fa-circle-check"></i>
            <p> Sent Successfully </p>
          </div>}
      </div>
    </div>
  )
}

export default ContactForm