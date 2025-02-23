import React from 'react';
import { Container, Typography, Grid, Box, Paper } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to St. John’s AME Zion Church
      </Typography>

      <Typography variant="h5" color="textSecondary" paragraph>
        A place of worship, community, and faith.
      </Typography>

      <Grid container spacing={4}>
        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              At St. John’s AME Zion Church, we are committed to preaching the Gospel of Jesus Christ and
              nurturing the spiritual, social, and emotional well-being of our community. We aim to spread
              love, hope, and faith to all, embracing every soul with open arms.
            </Typography>
          </Paper>
        </Grid>

        {/* History Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Our History
            </Typography>
            <Typography variant="body1">
              Founded in the early 20th century, St. John’s AME Zion Church has been a cornerstone of the
              community for decades. Over the years, we have been a place where individuals come together to
              worship, fellowship, and serve. Our rich history is deeply rooted in faith, resilience, and unity.
            </Typography>
          </Paper>
        </Grid>

        {/* Values Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Our Core Values
            </Typography>
            <Typography variant="body1">
              We believe in:
              <ul>
                <li>Faith - Trusting in God's purpose for our lives.</li>
                <li>Community - Embracing the power of unity and service.</li>
                <li>Integrity - Upholding truth, honesty, and righteousness.</li>
                <li>Compassion - Showing love and kindness to all people.</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>

        {/* What Visitors Can Expect Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              What You Can Expect
            </Typography>
            <Typography variant="body1">
              Whether you are visiting for the first time or have been a part of our congregation for many years,
              we welcome you with open arms. You will find a vibrant community, uplifting services, and numerous
              opportunities to get involved. Our doors are always open to anyone seeking spiritual growth and connection.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Thank you for visiting us today! We invite you to join us in worship, fellowship, and service. May God bless you!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;