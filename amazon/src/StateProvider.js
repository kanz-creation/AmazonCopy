//set up data layer
// we need this to track the basket
// how we use it instead of com
import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer, using instead of component
export const useStateValue = () => useContext(StateContext);
