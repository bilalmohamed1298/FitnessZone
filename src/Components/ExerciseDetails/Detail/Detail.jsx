import { useState } from "react";
import { Box, Button, Paper, Stack, Typography, Grid } from "@mui/material";

const Detail = ({ exerciseDetails }) => {
  const [textShowed, setTextShowed] = useState(true);

  const showMoreToggle = () => {
    setTextShowed(!textShowed);
  };

  return (
    <Box
      sx={{
        my: { sm: 16, xs: 3 },
        mx: { sm: 8, xs: 3 },
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          gap: 6,
          justifyContent: "center",
          flexWrap: { lg: "nowrap", xs: "wrap" },
        }}
      >
        <Grid container spacing={5}>
          <Grid item md={5} xs={12}>
            <Paper elevation={0}>
              <img
                src={`/exercises-GIFs/${exerciseDetails.name}.gif`}
                alt={exerciseDetails.name}
                style={{ borderRadius: "20px", width: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item md={7} xs={12}>
            <Stack sx={{}}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "700",
                  mt: 1,
                  mb: 4,
                }}
              >
                {exerciseDetails.name}
              </Typography>
              <Typography sx={{ opacity: "70%" }}>
                {exerciseDetails?.instructions && textShowed
                  ? exerciseDetails.instructions.substring(0, 200)
                  : exerciseDetails.instructions}
                <Button onClick={showMoreToggle} size={"small"}>
                  {textShowed ? "Show More" : "Show Less"}
                </Button>
              </Typography>
              <Stack
                sx={{
                  flexDirection: { lg: "column", xs: "row" },
                  justifyContent: { sm: "left", xs: "center" },
                }}
              >
                <Stack
                  sx={{
                    justifyContent: "left",
                    alignItems: "center",
                    mt: 3,
                    width: { lg: "200px" },
                    flexDirection: { lg: "row", xs: "column" },
                    ":hover": { scale: "1.2", transition: "0.3s ease-in-out" },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#fff3d3",
                      width: "70px",
                      height: "70px",
                      p: "18px",
                      borderRadius: "50px",
                    }}
                  >
                    <img src="/icons/muscle.png" alt="" width={"35px"} />
                  </Box>
                  <Typography
                    sx={{
                      mx: 3,
                      textTransform: "capitalize",
                      fontWeight: "600",
                    }}
                  >
                    {exerciseDetails.muscle}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "left",
                    alignItems: "center",
                    mt: 3,
                    width: { lg: "200px" },
                    flexDirection: { lg: "row", xs: "column" },
                    ":hover": { scale: "1.2", transition: "0.3s ease-in-out" },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#fff3d3",
                      width: "70px",
                      height: "70px",
                      p: "18px",
                      borderRadius: "50px",
                    }}
                  >
                    <img src="/icons/level.png" alt="" width={"35px"} />
                  </Box>
                  <Typography
                    sx={{
                      mx: 3,
                      textTransform: "capitalize",
                      fontWeight: "600",
                    }}
                  >
                    {exerciseDetails.difficulty}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "left",
                    alignItems: "center",
                    mt: 3,
                    width: { lg: "200px" },
                    flexDirection: { lg: "row", xs: "column" },
                    ":hover": { scale: "1.2", transition: "0.3s ease-in-out" },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#fff3d3",
                      width: "70px",
                      height: "70px",
                      p: "18px",
                      borderRadius: "50px",
                    }}
                  >
                    <img src="/icons/equipment.png" alt="" width={"35px"} />
                  </Box>
                  <Typography
                    sx={{
                      mx: 3,
                      textTransform: "capitalize",
                      fontWeight: "600",
                    }}
                  >
                    {exerciseDetails.equipment}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <hr
        style={{
          opacity: "50%",
          width: "90%",
          margin: "auto",
          marginTop: "100px",
        }}
      />
    </Box>
  );
};

export default Detail;
