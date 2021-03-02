import React from "react";
import ContextProvider from "./Context";
import HomeContainer from "./HomeContainer";

const HomeStore = () => {
  return (
    <ContextProvider>
      <HomeContainer />
    </ContextProvider>
  );
};

export default HomeStore;
