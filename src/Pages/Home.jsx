import { Box } from "@mui/material";
import Exercises from "../Components/Exercises/Exercises";
import SearchExercises from "../Components/SearchExercises/SearchExercises";
import HeroBanner from "../Components/HeroBanner/HeroBanner";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
