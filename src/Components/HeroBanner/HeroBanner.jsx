import { Box, Typography, Button } from "@mui/material";
import React from "react";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { sm: "212px", xs: "70px" },
        ml: { sm: "100px", xs: "0px" },
        textAlign:{xs:'center',sm:'initial'}
      }}
      position='relative'

    >
      <Typography style={{ fontWeight: "600",fontSize:'30px', color: "red"}}>
        Fitness Clup
      </Typography>
      <Typography
        style={{ fontWeight: "700"}}
        sx={{ fontSize:{sm:"44px",xs:'40px'}}}
        my='35px'
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography lineHeight={'35px'} mb={4} color='gray'>Check out the most effective exercises</Typography>
      <Button variant="contained" size="small" color="error" sx={{p:'10px',mb:'20px'}} >
        Explore Exercises
      </Button>
      <Typography
      fontSize={'200px'}
      fontWeight={'600'}
      color={'error'}
      sx={{opacity:'30%',
        display:{lg:'block',xs:'none'}
      }}
      >
        Exercises
      </Typography>
      <img src="../../assets/images/banner.png" alt="" 
      className="hero-banner-img"/>

    </Box>
  );
};

export default HeroBanner;
