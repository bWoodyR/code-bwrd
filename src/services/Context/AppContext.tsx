import React from "react";
import { useReducer } from "react";
import { Action, State, reducer } from "./appReducer";

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initState = {
  previousPage: "",
};

const AppContext = React.createContext<AppContextType>({
  state: initState,
  dispatch: () => {
    /*  empty */
  },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
