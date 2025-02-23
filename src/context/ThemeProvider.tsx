import React, { useState, useMemo, createContext, ReactNode, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Context for Theme Switching
export const ThemeContext = createContext({ toggleTheme: () => {} });

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get initial theme preference from localStorage or default to light mode
  const savedTheme = localStorage.getItem("theme") === "dark";
  const [darkMode, setDarkMode] = useState(savedTheme);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Save the preference to localStorage
      return newMode;
    });
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
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: "#ffffff", // Paper background for light mode
                color: "#000000", // Text color for light mode
              },
            },
          },
        },
      }),
    []
  );

  // Dark Theme with Improved Contrast for Readability
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: { main: "#ffcc00" }, // Yellow
          secondary: { main: "#388e3c" }, // Green
          background: { default: "#121212", paper: "#1a1a1a" }, // Darker paper for better contrast
          text: { primary: "#ffffff" }, // Light text for dark background
        },
        components: {
          // Style for Paper components to improve text contrast
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: "#1a1a1a", // Darker paper background
                color: "#ffffff", // Light text color
              },
            },
          },
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