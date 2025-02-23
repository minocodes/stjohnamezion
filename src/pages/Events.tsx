import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday @ 10:00 AM",
    description: "Join us for a powerful time of worship, prayer, and teaching from God's Word.",
    buttonText: "Join Us",
  },
  {
    title: "Bible Study & Prayer Night",
    date: "Wednesdays @ 7:00 PM",
    description: "Deepen your faith with our weekly Bible study and prayer gathering.",
    buttonText: "Learn More",
  },
  {
    title: "Community Food Drive",
    date: "March 10, 2025",
    description: "Help us serve our community by distributing food and essentials to those in need.",
    buttonText: "Volunteer",
  },
  {
    title: "Easter Celebration",
    date: "April 20, 2025",
    description: "Celebrate the resurrection of Jesus with us! A day full of worship, joy, and fellowship.",
    buttonText: "Attend",
  },
];

const Events = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Page Header */}
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        Upcoming Events
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
        Stay connected with the events happening at St. John’s AME Zion Church!
      </Typography>

      {/* Events Grid */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 3, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" color="primary" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {event.date}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {event.description}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                {event.buttonText}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Get Involved in Our Events!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Whether it's worship, community service, or fellowship, we welcome you to be a part of our events.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          View Full Calendar
        </Button>
      </Box>
    </Container>
  );
};

export default Events;