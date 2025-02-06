import { Box, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const FooterHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('../../../assets/images/footer-hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { md: "50px", xs: "30px" } }}
        >
          Get the fitness you deserve
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontSize: { md: "20px", xs: "12px" } }}
        >
          Join us today and start your journey to a healthy and strong body.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#CC2526",
            color: "#fff",
            fontSize: { md: "1.1rem", xs: '"1rem"' },
            px: 2,
            py: 1,
            "&:hover": {
              backgroundColor: "#A31F20",
            },
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
        >
          <Link to="home" style={{ textDecoration: "none", color: "white" }}>
            Join Us
          </Link>
        </Button>
      </Container>
    </Box>
  );
};

export default FooterHeroSection;
