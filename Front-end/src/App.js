import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//isloggedIn props will later be populated with the correct value, false is just a dummy value as for the initial project
function App() {
  return (
    <React.Fragment>
      <Header isLoggedIn={false} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
