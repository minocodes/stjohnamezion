import { Box, Container, Typography, Grid, Link } from "@mui/material";
// TODO: fix
export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Church Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">*St. John's AME Zion Church*</Typography>  {/*TODO: fix*/}
            <Typography variant="body2">
              *123 Church St, Lakewood, NJ * {/*TODO: fix*/}
              <br />
              Phone: (123) 456-7890  {/*TODO: fix*/}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/" color="inherit" underline="hover">Home</Link><br />
            <Link href="/about" color="inherit" underline="hover">About</Link><br />
            <Link href="/events" color="inherit" underline="hover">Events</Link><br />
            <Link href="/donate" color="inherit" underline="hover">Donate</Link><br />
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" align="right">
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
