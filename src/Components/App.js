import React from "react";
import Globalstyles from "Components/Globalstyles";
import Router from "Components/Router";
import Status from "./Status";

const App = () => {
  return (
    <>
      <Globalstyles />
      <Status />
      <Router />
    </>
  );
};

export default App;
