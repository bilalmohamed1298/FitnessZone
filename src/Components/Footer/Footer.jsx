import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#D32F2F",
        color: "white",
        py: 10,
        mt:8
      }}
    >
      <Container >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              We provide high-quality web solutions for businesses.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="#" color="inherit" underline="none">Home</Link><br />
            <Link href="#" color="inherit" underline="none">Services</Link><br />
            <Link href="#" color="inherit" underline="none">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <Typography variant="body2">
              Stay connected on our social media channels.
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">© {new Date().getFullYear()} Bilal Mourad. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
