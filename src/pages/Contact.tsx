import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Contact = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Header */}
      <Typography variant="h3" color="primary" gutterBottom>
        Contact St. John’s AME Zion Church
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        We’d love to hear from you! Reach out with any questions, prayer requests, or to learn more about our community.
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Our Location
            </Typography>
            <Typography variant="body1">
              📍 <strong>St. John’s AME Zion Church</strong>  
              <br /> 123 Church St, Lakewood, NJ  
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              📞 <strong>Phone:</strong> <Link href="tel:1234567890" color="inherit">(123) 456-7890</Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              📧 <strong>Email:</strong> <Link href="mailto:info@stjohnschurch.com" color="inherit">info@stjohnschurch.com</Link>
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField label="Your Name" fullWidth variant="outlined" sx={{ mb: 2 }} />
              <TextField label="Your Email" fullWidth variant="outlined" sx={{ mb: 2 }} />
              <TextField label="Message" fullWidth multiline rows={4} variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Google Maps Embed */}
        <Grid size={12}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Find Us on the Map
            </Typography>
            <Box sx={{ overflow: "hidden", borderRadius: 2, mt: 2 }}>
              <iframe
                title="Church Location"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0, borderRadius: "8px" }}
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Church+St,+Lakewood,+NJ"
                allowFullScreen
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;