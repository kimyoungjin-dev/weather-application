import React, { useContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useState = () => {
  const {
    state: { loading, response },
  } = useContext(Context);
  return { loading, response };
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return { dispatch };
};
export default ContextProvider;
