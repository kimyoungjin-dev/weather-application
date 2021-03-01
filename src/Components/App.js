import React from "react";
import Globalstyles from "Components/Globalstyles";
import Router from "Components/Router";
import Bg from "Components/Bg";
import Status from "./Status";

const App = () => {
  return (
    <>
      <Router />
      <Globalstyles />
      <Status />
      <Bg />
    </>
  );
};

export default App;
