import React from "react";

import PageLayoutWrapper from "./Components/PageLayoutWrapper";

//isloggedIn props will later be populated with the correct value, false is just a dummy value as for the initial project
//header and footer are contained inside the PageLayoutWrapper component
function App() {
  return <PageLayoutWrapper isLoggedIn={false}></PageLayoutWrapper>;
}

export default App;
