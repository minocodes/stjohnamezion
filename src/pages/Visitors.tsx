import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';

const Visitors = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Page Header */}
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        Welcome to St. John’s AME Zion Church!
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
        We are so glad you're considering joining us for a service. Here's what you can expect when you visit.
      </Typography>

      {/* What to Expect Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          What to Expect
        </Typography>
        <Typography variant="body1" paragraph>
          At St. John’s AME Zion Church, you'll experience a welcoming community that is committed to worship, service, and fellowship. Our services are lively and filled with heartfelt worship through music, teaching, and prayer.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're visiting for the first time or looking for a new church home, we want to make sure you feel at home. Our services are open to everyone, and there’s a place for you here!
        </Typography>
      </Box>

      {/* Visitor Info Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, boxShadow: 3, textAlign: 'center' }}>
            <Typography variant="h5" color="primary" gutterBottom>
              Service Times
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Sunday Worship: 10:00 AM
              <br />
              Wednesday Bible Study: 7:00 PM
              <br />
              Special Events: Check our Events Page!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, boxShadow: 3, textAlign: 'center' }}>
            <Typography variant="h5" color="primary" gutterBottom>
              Location & Directions
            </Typography>
            <Typography variant="body1" color="textSecondary">
              123 Church St, Lakewood, NJ
              <br />
              Parking is available on-site. Please arrive early to ensure a good spot!
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Get Directions
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Invitation to Join Us */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Join Us This Sunday!
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We would love for you to join us for worship this Sunday at 10:00 AM. We believe you'll find a community where you can grow in your faith and build lasting friendships.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Plan Your Visit
        </Button>
      </Box>
    </Container>
  );
};

export default Visitors;