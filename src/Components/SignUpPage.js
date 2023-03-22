import React, { useState } from 'react'
import useInput from '../hooks/use-input';
import { getData, saveData } from '../store/fetchData';
import Modal from '../UI/Modal';

import classes from './SignUpForm.module.css'

const SignUpPage = () => {

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const validatePwd = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        const numberRegex = /[0-9]/;

        if (password.length >= 8 && uppercaseRegex.test(password) && numberRegex.test(password) && specialCharRegex.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    const {
        value: enteredUsername,
        isValid: usernameIsValid,
        hasError: userNameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUserName
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(value => value.includes('@'));

    const {
        value: enteredpwd,
        isValid: pwdIsValid,
        hasError: pwdHasError,
        valueChangeHandler: pwdChangeHandler,
        inputBlurHandler: pwdBlurHandler,
        reset: resetPwd
    } = useInput(validatePwd);

    const {
        value: enteredcpwd,
        isValid: cpwdIsValid,
        hasError: cpwdHasError,
        valueChangeHandler: cpwdChangeHandler,
        inputBlurHandler: cpwdBlurHandler,
        reset: resetCpwd
    } = useInput(value => value === enteredpwd && value.trim() !== '');

    let isFormValid = false;

    if (usernameIsValid && emailIsValid && pwdIsValid && cpwdIsValid) {
        isFormValid = true;
    }

    async function validateData(event) {
        event.preventDefault();

        const emailExists = await getData(enteredEmail);
        if(emailExists){
            console.log("Email id already exists");
            setErrorModal(true);
            return;
        }else{
            const details = {
                name : enteredUsername,
                email : enteredEmail,
                password : enteredcpwd
            }
            saveData(details, /*here pass your database url for storing user details*/);
            setSuccessModal(true);
        }
        
        resetUserName();
        resetEmail();
        resetPwd();
        resetCpwd();
    }

    const modalHandler = () => {
        setErrorModal(false);
        setSuccessModal(false);
    }
    const inputClass = userNameHasError ? `${classes.formInvalid}` : `${classes.formControl}`;

    return (
        <div>
        {errorModal && <Modal icon= "fa-regular fa-circle-xmark" heading="Ooops!" text="Entered email id is already exists" onClear={modalHandler}/>}
        {successModal && <Modal icon= "fa-regular fa-circle-check" heading="Successful" text="Account has been created successfully!" onClear={modalHandler}/>}
        <div className={classes.formDiv} >
            <h1>Sign up</h1>
            <form onSubmit={validateData}>
                <div className={inputClass}>
                    <label htmlFor='uname'>Username</label>
                    <input type="textbox" id="uname"
                        placeholder="Username"
                        onChange={usernameChangeHandler}
                        onBlur={usernameBlurHandler}
                        value={enteredUsername} />
                    {userNameHasError && <p className={classes.errorText}>Enter valid username</p>}
                </div>

                <div className={inputClass}>
                    <label htmlFor='email'>Email</label>
                    <input type="textbox" id="email"
                        placeholder="Email"
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail} />
                    {emailHasError && <p className={classes.errorText}>Enter valid email id</p>}
                </div>

                <div className={inputClass}>
                    <label htmlFor='pwd'>Password</label>
                    <input type="password" id="pwd"
                        placeholder="Password"
                        onChange={pwdChangeHandler}
                        onBlur={pwdBlurHandler}
                        value={enteredpwd} />
                    {pwdHasError && <ul className={classes.errorText}>
                        <li>Character length should be greater than 8</li>
                        <li>Should contains number</li>
                        <li>Atleast one uppercase must</li>
                        <li>Atleast one special character must</li>
                    </ul>}
                </div>

                <div className={inputClass}>
                    <label htmlFor='cpwd'>Confirm Password</label>
                    <input type="password" id="cpwd"
                        placeholder="Confirm Password"
                        onChange={cpwdChangeHandler}
                        onBlur={cpwdBlurHandler}
                        value={enteredcpwd} />
                    {!pwdHasError && cpwdHasError && <p className={classes.errorText}> Password should be same</p>}
                </div>


                <div className={classes.fbtn}><button disabled={!isFormValid}>Sign Up</button></div>
            </form>
        </div>
    </div>   
    )
}

export default SignUpPage