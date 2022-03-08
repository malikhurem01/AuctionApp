import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import PrivacyAndPolicy from '../Pages/PrivacyAndPolicy';
import TermsAndConditions from '../Pages/TermsAndConditions';
import AboutUs from '../Pages/AboutUs';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import Logout from '../Pages/Logout';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shop">
          <h1>Shop page</h1>
        </Route>
        <Route path="/account">
          <h1>My Account page</h1>
        </Route>
        <Route path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/privacy-and-policy">
          <PrivacyAndPolicy />
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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
