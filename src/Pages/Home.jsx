import { Box } from "@mui/material";
import Exercises from "../Components/Exercises/Exercises";
import SearchExercises from "../Components/SearchExercises/SearchExercises";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import AnimatedHeader from "../Components/AnimatedHeader/AnimatedHeader";
import FooterHeroSection from "../Components/FooterHeroSection/FooterHeroSection";

const Home = () => {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <HeroBanner />
        <AnimatedHeader />
        <SearchExercises />
        <Exercises />
      </Box>
      <FooterHeroSection />
    </>
  );
};

export default Home;
