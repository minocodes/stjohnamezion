import React, { useState, useMemo, createContext, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Context for Theme Switching
export const ThemeContext = createContext({ toggleTheme: () => {} });

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Light Theme
  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: { main: "#ffcc00" }, // Yellow
          secondary: { main: "#d32f2f" }, // Red
          background: { default: "#f5f5f5", paper: "#ffffff" },
          text: { primary: "#000000" },
        },
      }),
    []
  );

  // Dark Theme
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: { main: "#ffcc00" }, // Yellow
          secondary: { main: "#388e3c" }, // Green
          background: { default: "#121212", paper: "#1e1e1e" },
          text: { primary: "#ffffff" },
        },
      }),
    []
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;