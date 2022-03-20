import React, { useContext, useState } from "react";
import useQuery from "../../../Hooks/useQuery";
import { setToken } from "../../../Services/authService";

import userService from "../../../Services/userService";
import AppContext from "../../../Store/Context-API/app-context";
import Modal from "../../UI/Modal";

import { WRONG_CREDENTIALS_ERROR } from "../../../Data/Constants/login";

import classes from "./Login.module.css";

const LoginForm = () => {
  //HOOKS
  const { isDataFetchedHandler } = useContext(AppContext);
  const query = useQuery();

  //STATES
  const [error, setError] = useState(false);

  //HANDLERS
  const handleSubmit = (ev) => {
    ev.preventDefault();

    //SET LOADING SCREEN
    isDataFetchedHandler(false);

    //COLLECT LOGIN DATA
    let authData = {
      userName: ev.target.elements["username"].value,
      password: ev.target.elements["password"].value,
    };

    //MAKE A POST REQUEST
    return userService
      .login(authData)
      .then((response) => {
        //COLLECT TOKEN
        const tokenObj = {
          access_token: response.data.jwt_access,
          refresh_token: response.data.jwt_refresh,
        };
        //STORE TOKEN
        setToken(tokenObj);

        //REDIRECT
        window.location.replace("/");
      })
      .catch(() => {
        //REMOVE LOADING SCREEN
        isDataFetchedHandler(true);

        //DISPLAY ERROR
        setError(WRONG_CREDENTIALS_ERROR);
      });
  };

  return (
    <div className={classes.container}>
      {query.get("success") && (
        <Modal title={"Success!"} message={"Please log in to continue"} />
      )}
      {query.get("logout") && (
        <Modal
          title={"Goodbye!"}
          message={"You have successfully logged out"}
        />
      )}
      <div className={classes.heading}>
        <h5>Login</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter Email</label>
          <input
            required
            id="email"
            name="username"
            type="email"
            placeholder="user@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />

          <div className={classes.login_btn}>
            <input type="submit" value="login" />
          </div>
        </div>
      </form>
      {error && (
        <div className={classes.login_error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
