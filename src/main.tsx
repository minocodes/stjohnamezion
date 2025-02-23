import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import ThemeProvider from "./context/ThemeProvider"; // Import ThemeContext
import { CssBaseline, Box } from "@mui/material";

// Root Component that handles theme toggle
const Root = () => {

  return (
    <React.StrictMode>
      {/* Main Content */}
      <Box component="main" sx={{  }}>
        <AppRouter />
      </Box>
    </React.StrictMode>
  );
};

// Render the application with the ThemeProvider in `main.tsx`
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <CssBaseline />
    <Root />
  </ThemeProvider>
);