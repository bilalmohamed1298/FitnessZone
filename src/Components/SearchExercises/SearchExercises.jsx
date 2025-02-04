import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ExercisesContext } from "../../Utils/ExercisesContext";
import HorizontalScrollbar from "./HorizontalScrollbar/HorizontalScrollbar";


const SearchExercises = () => {
  let {  ExercisesData , musclesData, Exercises, setExercises, muscles, setmuscles} = useContext(ExercisesContext);
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
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
        }}
      >
        Awesome Exercises You <br /> Should Know
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
        >
          Search
        </Button>
      </Box>
      <Box sx={{ width: "100%", p: "30px" }}>
        <HorizontalScrollbar muscles={muscles} Exercises={Exercises} setExercises={setExercises} ExercisesData={ExercisesData}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
