import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
export default function Navigation() {
  const { toggleTheme } = useContext(ThemeContext); // Get toggleTheme function from context

  return (
    <AppBar position="static">
      
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          St. John's AME Zion
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/events">Events</Button>
        <Button color="inherit" component={Link} to="/donate">Donate</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/visitors">Visitors</Button>
        <Button color="inherit" component={Link} to="/community">Community</Button>
        <Switch onChange={toggleTheme} inputProps={{ "aria-label": "theme toggle" }} />
        
      </Toolbar>
    </AppBar>
  );
}
