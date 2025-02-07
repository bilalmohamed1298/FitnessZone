import { Box, Typography, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const HeroBanner = () => {
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 0.4,
        y: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
        onStart: () => {
          gsap.to(headingRef.current, {
            scale: 1.1,
            duration: 0.3,
          });
        },
      }
    );
  }, []);

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
          textTransform: "capitalize",
        }}
      >
        Fitness Zone
      </Typography>
      <Typography
        style={{ fontWeight: "700" }}
        sx={{ fontSize: { sm: "35px", xs: "30px" } }}
        my="35px"
      >
        Smile, Build Strength <br /> & Stay Consistent
      </Typography>
      <Typography
        lineHeight={"35px"}
        mb={4}
        color="gray"
        sx={{
          fontSize: { sm: "16px", xs: "" },
          display: { sm: "block", xs: "none" },
        }}
      >
        Boost Your Fitness with Proven Exercises
      </Typography>
      <Link to="/exercises">
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{ p: "10px", mb: "20px", fontFamily: "MyCustomFont" }}
        >
          Explore Exercises
        </Button>
      </Link>
      <Typography
        ref={headingRef}
        fontSize={"100px"}
        fontWeight={"600"}
        color={"error"}
        sx={{
          opacity: "30%",
          display: { lg: "block", xs: "none" },
          mt: 18,
          textTransform: "uppercase",
          fontFamily: "MyCustomFont",
        }}
      >
        Fitness Zone
      </Typography>
      <img src={"/images/banner.png"} alt="" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
