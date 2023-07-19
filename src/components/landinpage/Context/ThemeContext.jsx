import React, { createContext } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const User = useSelector((state)=> state.persisitedReducer.user)
    console.log(User)
  return (
    <ThemeContext.Provider value={{ User }}>
      {children}
    </ThemeContext.Provider>
  );
};
