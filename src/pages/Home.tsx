import { Box, Button, Container, Grid, Typography, Card, CardContent } from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Welcome to St. John’s AME Zion Church
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
            A place of faith, love, and community.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Join Us This Sunday
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              About Our Church
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We are a welcoming and faith-driven community committed to serving others.
              Our mission is to spread love, hope, and spiritual growth through worship,
              outreach, and education. Join us and be a part of something meaningful!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" 
            src="data:image/jpeg;base64,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" 
            alt="Church Image" width="100%" borderRadius={2} border={'2px solid red'}/>

          </Grid>
        </Grid>
      </Container>

      {/* Events Section */}
      <Box sx={{ bgcolor: "grey.100", py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
            Upcoming Events
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((event) => (
              <Grid item xs={12} sm={4} key={event}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      Event Title {event}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sunday, March {10 + event}, 2025 | 10:00 AM
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Join us for an inspiring event filled with worship and community.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;