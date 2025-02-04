import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ExercisesContext } from "../../Utils/ExercisesContext";
import HorizontalScrollbar from "./HorizontalScrollbar/HorizontalScrollbar";

const SearchExercises = () => {
  let { ExercisesData, Exercises, setExercises, muscles } =
    useContext(ExercisesContext);
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    filterSearchExercises();
  }, [searchTerm]);

  const getSearchValue = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterSearchExercises = () => {
    const SearchedExercises = ExercisesData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.type.toLowerCase().includes(searchTerm) ||
        exercise.equipment.toLowerCase().includes(searchTerm) ||
        exercise.muscle.toLowerCase().includes(searchTerm)
    );
    setExercises(SearchedExercises);
  };

  return (
    <Stack
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "70px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: { sm: "30px", xs: "26px" },
        }}
      >
        What&apos;s Your Workout Goal <br /> for Today?
      </Typography>
      <Box style={{ margin: "50px", position: "relative" }}>
        <TextField
          placeholder="Search for exercises"
          sx={{
            height: "px",
            width: { lg: "800px", xs: "350px" },
            input: { border: "none", borderRadius: "4px" },
            borderRadius: "40px",
            border: "none",
          }}
          onInput={getSearchValue}
        />
        <Button
          className="search-btn"
          style={{ position: "absolute", height: "100%" }}
          sx={{
            right: "0",
          }}
          size="large"
          variant="contained"
          color="error"
          onClick={() => {
            window.scrollTo({
              top: 1100,
              left: 100,
              behavior: "smooth",
            });
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ width: "100%", p: "30px" }}>
        <HorizontalScrollbar
          muscles={muscles}
          Exercises={Exercises}
          setExercises={setExercises}
          ExercisesData={ExercisesData}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
