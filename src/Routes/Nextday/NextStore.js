import React from "react";
import ContextProvider from "./Context";
import NextContainer from "./NextContainer";

const NextStore = () => {
  return (
    <ContextProvider>
      <NextContainer />
    </ContextProvider>
  );
};

export default NextStore;
