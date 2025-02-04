import { Stack } from "@mui/material";
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
      px="30px"
    >
      <Link to="/">
        <img src="../../assets/images/Logo.png" alt="Logo" />
      </Link>
      <Stack direction={"row"} spacing={4} fontSize={"20px"}>
        <Link to="home" style={{ textDecoration: "none", color: "#000" }}>
          Home
        </Link>
        <Link to="exercises" style={{ textDecoration: "none", color: "#000" }}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
