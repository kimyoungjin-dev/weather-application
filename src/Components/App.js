import React from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "Components/Router";
import Bg from "Components/Bg";
import DateCollection from "Components/DateCollection";
import WetherIcons from "Components/WetherIcons";

const App = () => {
  const DateArray = DateCollection();
  const weatherIcon = WetherIcons();

  return (
    <div>
      <GlobalStyles />
      <Bg />
      <Router DateArray={DateArray} weatherIcon={weatherIcon} />
    </div>
  );
};

export default App;
