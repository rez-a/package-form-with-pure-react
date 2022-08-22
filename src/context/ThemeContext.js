import React, { createContext } from "react";

export const themeContext = createContext();


const ThemeContext = ({ children, theme, setTheme }) => {
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider >
    );
};

export default ThemeContext;