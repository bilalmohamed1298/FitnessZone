import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
      }}
      px="50px"
    >
      <Link to="/">
        <Box
          sx={{
            ":hover": { scale: "1.2", transition: "0.8s ease" },
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: "55px" }}
          />
        </Box>
      </Link>
      <Stack direction={"row"} spacing={4} fontSize={"18px"}>
        <Box
          sx={{
            ":hover": {
              scale: "1.1",
              transition: "0.3s ease",
              borderBottom: "2px solid #CC2526",
            },
            " &:focus ": { borderBottom: "2px solid #CC2526" },
          }}
        >
          <Link to="home" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
        </Box>
        <Box
          sx={{
            ":hover": {
              scale: "1.1",
              transition: "0.3s ease",
              borderBottom: "2px solid #CC2526",
            },
            " &:focus ": { borderBottom: "2px solid #CC2526" },
          }}
        >
          <Link
            to="exercises"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Exercises
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
