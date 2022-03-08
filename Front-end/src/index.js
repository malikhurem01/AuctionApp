import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { setToken, refreshToken } from './Services/authService';

import { userDataService } from './Services/userService';

const initialize = async () => {
  let token = JSON.parse(sessionStorage.getItem('user_jwt'));
  if (token) {
    let response, user;
    try {
      response = await userDataService(token.access_token);
      user = await response.json();
    } catch (err) {}
    if (parseInt(response.status) === 403) {
      // Checks whether the response code is forbidden, if it is, then sends the refresh token and gets the new access token
      let tokenResponse = await refreshToken(token.refresh_token);
      let tokenResponseBody = await tokenResponse.json();
      let tokenObj = {
        access_token: tokenResponseBody.jwt_access,
        refresh_token: tokenResponseBody.jwt_refresh
      };
      setToken(tokenObj);
      response = await userDataService(tokenResponseBody.jwt_access);
      user = await response.json();
    }
    return user.user;
  } else {
    return null;
  }
};

const startApplication = user => {
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
};

initialize().then(startApplication);
