import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { sm: "212px", xs: "70px" },
        ml: { sm: "100px", xs: "0px" },
        textAlign: { xs: "center", sm: "initial" },
      }}
      position="relative"
    >
      <Typography
        style={{
          fontWeight: "600",
          fontSize: "30px",
          color: "red",
          textTransform: "uppercase",
        }}
      >
        Fitness Zone
      </Typography>
      <Typography
        style={{ fontWeight: "700" }}
        sx={{ fontSize: { sm: "35px", xs: "40px" } }}
        my="35px"
      >
        Smile, Build Strength <br /> & Stay Consistent
      </Typography>
      <Typography lineHeight={"35px"} mb={4} color="gray">
        Boost Your Fitness with Proven Exercises
      </Typography>
      <Link to="/exercises">
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{ p: "10px", mb: "20px" }}
        >
          Explore Exercises
        </Button>
      </Link>
      <Typography
        fontSize={"200px"}
        fontWeight={"600"}
        color={"error"}
        sx={{ opacity: "30%", display: { lg: "block", xs: "none" } }}
      >
        Exercises
      </Typography>
      <img
        src="../../assets/images/banner.png"
        alt=""
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
