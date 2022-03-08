import React from 'react';

import { AuthContextProvider } from './Store/auth-context';
import PageLayoutWrapper from './Components/PageLayoutWrapper';
import Routes from './Data/Routes';

function App({ user }) {
  return (
    <AuthContextProvider userData={user}>
      <PageLayoutWrapper>
        <Routes />
      </PageLayoutWrapper>
    </AuthContextProvider>
  );
}

export default App;
