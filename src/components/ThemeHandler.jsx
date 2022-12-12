import React, { createContext, useReducer } from 'react';

export const darkModeContext = createContext();

export const DarkModeState = ({ children }) => {
  const initialState = {
    darkMode: false,
  };

  const darkModeReducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          darkMode: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  const setDarkMode = (bool) => {
    dispatch({
      type: 'SET_THEME',
      payload: bool,
    });
  };

  return (
    <darkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
      }}
    >
      {children}
    </darkModeContext.Provider>
  );
};
