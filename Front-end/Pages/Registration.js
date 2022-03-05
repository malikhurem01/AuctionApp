import React from 'react';

import PageLayoutWrapper from '../Components/PageLayoutWrapper';
import RegistrationForm from '../Components/Authentication/Registration/RegistrationForm';
const Registration = (props) => {
  return (
    <PageLayoutWrapper isLoggedIn={false} navHidden={true}>
      <RegistrationForm />
    </PageLayoutWrapper>
  );
};

export default Registration;
