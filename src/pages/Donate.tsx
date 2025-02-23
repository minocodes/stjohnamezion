import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';

const Donate = () => {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      {/* Header */}
      <Typography variant="h3" color="primary" gutterBottom>
        Support St. John’s AME Zion Church
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Your generosity helps us spread faith, serve our community, and continue our mission.
      </Typography>

      {/* Donation Options */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h5" color="primary">
              One-Time Donation
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Make a one-time contribution to support our church's ongoing efforts.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Donate Now
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h5" color="primary">
              Recurring Donation
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Set up a monthly donation and help us make a lasting impact.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Give Monthly
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h5" color="primary">
              Other Ways to Give
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Donate via PayPal, CashApp, or check.
            </Typography>
            <Button variant="contained" color="success" sx={{ mt: 2 }}>
              See Options
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Direct Payment Options */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Donate Easily & Securely
        </Typography>
        <Typography variant="body1">
          Choose your preferred payment method below:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary" size="large">
            PayPal
          </Button>
          <Button variant="contained" color="secondary" size="large">
            CashApp
          </Button>
          <Button variant="contained" color="success" size="large">
            Credit/Debit Card
          </Button>
        </Box>
      </Box>

      {/* Testimonials */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Your Donation Makes a Difference
        </Typography>
        <Typography variant="body1" color="textSecondary">
          "Thanks to the generosity of donors, we have been able to feed over 500 families and
          support countless individuals in need." – Church Volunteer
        </Typography>
      </Box>

      {/* Bible Verse */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" color="primary">
          "Each one must give as he has decided in his heart, not reluctantly or under compulsion,
          for God loves a cheerful giver." – 2 Corinthians 9:7
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box sx={{ mt: 5 }}>
        <Button variant="contained" color="primary" size="large">
          Give Now
        </Button>
      </Box>
    </Container>
  );
};

export default Donate;