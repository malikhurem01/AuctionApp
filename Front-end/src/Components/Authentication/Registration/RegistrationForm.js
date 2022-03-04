import React, { useState } from 'react';

import classes from './Registration.module.css';
import userRegistrationService from '../../../Services/userRegistrationService';

const RegistrationForm = (props) => {
  const [formNameState, setFormName] = useState('');
  const [formLastNameState, setFormLastName] = useState('');
  const [formEmailState, setFormEmail] = useState('');
  const [formPasswordState, setFormPassword] = useState('');

  const formSubmitHandler = async (ev) => {
    ev.preventDefault();
    let registrationData = {
      first_name: formNameState,
      last_name: formLastNameState,
      email: formEmailState,
      password: formPasswordState
    };

    setFormName('');
    setFormLastName('');
    setFormEmail('');
    setFormPassword('');

    userRegistrationService(registrationData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h5>Register</h5>
      </div>

      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formNameState}
            onChange={(ev) => {
              setFormName(ev.target.value);
            }}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formLastNameState}
            onChange={(ev) => setFormLastName(ev.target.value)}
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formEmailState}
            onChange={(ev) => setFormEmail(ev.target.value)}
            placeholder="user@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formPasswordState}
            onChange={(ev) => setFormPassword(ev.target.value)}
            placeholder="********"
          />
          <div className={classes.register_btn}>
            <input type="submit" value="register" />
          </div>
          <div className={classes.alternative}>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
