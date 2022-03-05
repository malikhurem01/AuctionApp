import React from 'react';

import PageLayoutWrapper from '../Components/PageLayoutWrapper';
import LoginForm from '../Components/Authentication/Login/LoginForm';

const Login = (props) => {
  return (
    <PageLayoutWrapper isLoggedIn={false} navHidden={true}>
      <LoginForm />
    </PageLayoutWrapper>
  );
};

export default Login;
