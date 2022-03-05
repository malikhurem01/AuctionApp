import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userDataService from './Services/userDataService';
import refreshToken from './Services/userRefreshTokenService';

const initialize = async () => {
  let token = JSON.parse(sessionStorage.getItem('user_jwt'));
  if (token) {
    let response, user;
    try {
      response = await userDataService(token.access_token);
      user = await response.json();
      console.log(response.status);
    } catch (err) {
      console.log(err);
    }
    if (parseInt(response.status) === 403) {
      // Checks whether the response code is forbidden, if it is, then sends the refresh token and gets the new access token
      sessionStorage.clear();
      let tokenResponse = await refreshToken(token.refresh_token);
      let tokenResponseBody = await tokenResponse.json();
      let user_jwt = {
        access_token: tokenResponseBody.jwt_access,
        refresh_token: tokenResponseBody.jwt_refresh
      };
      console.log(user_jwt);
      sessionStorage.setItem('user_jwt', JSON.stringify(user_jwt));
      response = await userDataService(tokenResponseBody.jwt_access);
      user = await response.json();
    }
    startApplication(user.user);
  } else {
    startApplication(null);
  }
};

const startApplication = (user) => {
  ReactDOM.render(
    <App userData={user ? user : null} />,
    document.getElementById('root')
  );
};

initialize();
