import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Example light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffcc00", // Adjust based on your color scheme
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffcc00",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
<AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
