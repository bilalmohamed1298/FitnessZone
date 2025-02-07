import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from "./Components/Navbar/Navbar";
import AllExercises from "./Components/AllExercises/AllExercises";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {},
});

function App() {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/exercises" element={<AllExercises />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Routes>
        </ThemeProvider>
      </Box>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
