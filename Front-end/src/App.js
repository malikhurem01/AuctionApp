import React from "react";

import { Route } from "react-router-dom";
import PageLayoutWrapper from "./Components/PageLayoutWrapper";

import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import AboutUs from "./Pages/AboutUs";

//isloggedIn props will later be populated with the correct value, false is just a dummy value as for the initial project
function App() {
  return (
    <PageLayoutWrapper isLoggedIn={false}>
      <Route path="/privacy-and-policy">
        <PrivacyAndPolicy />
      </Route>
      <Route path="/terms-and-conditions">
        <TermsAndConditions />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
    </PageLayoutWrapper>
  );
}

export default App;
