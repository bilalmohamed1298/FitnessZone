import { Box } from "@mui/material";
import Exercises from "../Components/Exercises/Exercises";
import SearchExercises from "../Components/SearchExercises/SearchExercises";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import AnimatedHeader from "../Components/AnimatedHeader/AnimatedHeader";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <AnimatedHeader />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
