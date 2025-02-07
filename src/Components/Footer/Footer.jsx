import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#D32F2F",
        color: "white",
        pt: 10,
        pb: { sm: 10, xs: 7 },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide high-quality web solutions for businesses.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              to="home"
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                margin: "8px 0",
              }}
              onClick={() => {
                window.scroll({
                  top: 0,
                });
              }}
            >
              Home
            </Link>
            <Link
              to="exercises"
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                margin: "8px 0",
              }}
              onClick={() => {
                window.scroll({
                  top: 0,
                });
              }}
            >
              Exercises
            </Link>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "block",
                margin: "8px 0",
              }}
              onClick={() => {
                window.scroll({
                  top: 0,
                });
              }}
            >
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Stay connected on our social media channels.
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={7}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Bilal Mourad. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
