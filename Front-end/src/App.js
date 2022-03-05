import React from 'react';

import { Route } from 'react-router-dom';

import PrivacyAndPolicy from './Pages/PrivacyAndPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContextProvider } from './Store/auth-context';
import Logout from './Pages/Logout';

function App(props) {
  return (
    <AuthContextProvider userData={props.userData}>
      <BrowserRouter>
        <Route path="/account">
          <h1>My Account page</h1>
        </Route>
        <Route path="/password-reset">
          <h1>Password reset page</h1>
        </Route>
        <Route path="/shop">
          <h1>Shop page</h1>
        </Route>
        <Route path="/privacy-and-policy">
          <PrivacyAndPolicy />
        </Route>
        <Route path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
