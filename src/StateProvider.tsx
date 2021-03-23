import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

interface Props {
  reducer: any,
  initialState: any,
  children: any,
}

export const StateProvider = ({ reducer, initialState, children }: Props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);