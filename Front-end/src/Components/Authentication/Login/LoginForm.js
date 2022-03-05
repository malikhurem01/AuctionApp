import React, { useState } from 'react';

import classes from './Login.module.css';
import userLogin from '../../../Services/userLoginService';

const LoginForm = (props) => {
  const [formEmailState, setFormEmail] = useState('');
  const [formPasswordState, setFormPassword] = useState('');

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    let authData = { userName: formEmailState, password: formPasswordState };
    userLogin(authData)
      .then((response) => {
        let user_jwt = {
          access_token: response.data.jwt_access,
          refresh_token: response.data.jwt_refresh
        };
        sessionStorage.setItem('user_jwt', JSON.stringify(user_jwt));
        window.location.replace('/about-us');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h5>Login</h5>
      </div>
      <form
        method="POST"
        action="http://localhost:8083/api/v1/authenticate"
        onSubmit={formSubmitHandler}
      >
        <div>
          <label htmlFor="username">Enter Email</label>
          <input
            id="email"
            name="username"
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
          <div className={classes.login_btn}>
            <input type="submit" value="login" />
          </div>
          <div className={classes.alternative}>
            <p>
              <a href="/password-reset">Forgot password?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
