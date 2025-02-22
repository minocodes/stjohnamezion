import React from 'react'
import { Container, Typography } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <h1>Home:  </h1>

          <Typography variant="h3" color="primary" gutterBottom>
            Welcome to St. John’s AME Zion Church
          </Typography>
          <Typography variant="body1">
            A place of worship, community, and faith.
          </Typography>
        </Container>
      );
    
}

export default Home