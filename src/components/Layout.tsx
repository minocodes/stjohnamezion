import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Container sx={{ mt: 4 }}>
        <Outlet /> {/* This is where each page's content will be injected */}
      </Container>
    </>
  );
}
