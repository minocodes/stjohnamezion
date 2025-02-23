import { Box, Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct import for Grid2

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", mt: 4, py: 3 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Church Info */}
          <Grid size={4}>
            <Typography variant="h6">St. John's AME Zion Church</Typography>
            <Typography variant="body2">
              123 Church St, Lakewood, NJ <br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/" color="inherit" underline="hover">Home</Link><br />
            <Link href="/about" color="inherit" underline="hover">About</Link><br />
            <Link href="/events" color="inherit" underline="hover">Events</Link><br />
            <Link href="/donate" color="inherit" underline="hover">Donate</Link><br />
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Grid>

          {/* Copyright */}
          <Grid size={4} sx={{ textAlign: "right" }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} St. John's AME Zion Church.  
              <br />
              All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}