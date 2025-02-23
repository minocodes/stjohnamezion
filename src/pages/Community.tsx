import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Community = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to Our Community at St. John’s AME Zion Church
      </Typography>

      <Typography variant="h5" color="textSecondary" paragraph>
        A place where faith meets fellowship, and we serve together to make a difference.
      </Typography>

      <Grid container spacing={4}>
        {/* Section 1: Outreach Programs */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Outreach Programs
            </Typography>
            <Typography variant="body1">
              Our church is dedicated to helping those in need. Through our various outreach programs,
              we provide support to the local community through food drives, clothing donations, and
              youth mentorship programs. Whether you are in need or looking to help, there's always
              a way for you to get involved.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Paper>
        </Grid>

        {/* Section 2: Volunteer Opportunities */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Volunteer Opportunities
            </Typography>
            <Typography variant="body1">
              We believe in the power of service. Our volunteers play a crucial role in supporting
              the church and the community. Whether it’s helping with church events, community outreach,
              or assisting with the youth ministry, there are countless ways to get involved and make
              a meaningful impact.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Volunteer Now
            </Button>
          </Paper>
        </Grid>

        {/* Section 3: Community Events */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Community Events
            </Typography>
            <Typography variant="body1">
              Throughout the year, we host a variety of community events that bring us together in
              fellowship and celebration. From seasonal festivals and church picnics to charity
              events and youth camps, there's always something happening at St. John’s AME Zion Church.
              We encourage you to be a part of these enriching experiences!
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Check Upcoming Events
            </Button>
          </Paper>
        </Grid>

        {/* Section 4: Support Groups */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "background.paper", boxShadow: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Support Groups
            </Typography>
            <Typography variant="body1">
              St. John’s AME Zion Church offers various support groups for different needs within
              our congregation. Whether you’re going through a tough time, looking for spiritual
              guidance, or just want a place to connect with others, our support groups are here to
              help. Join us as we grow together in faith and community.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Join a Support Group
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="textSecondary">
          Thank you for being a part of the St. John’s AME Zion Church family. We invite you to explore
          all the ways you can get involved, serve others, and strengthen your connection to our vibrant
          community.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Get Involved Today
        </Button>
      </Box>
    </Container>
  );
}

export default Community;