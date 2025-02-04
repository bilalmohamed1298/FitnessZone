import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ExercisesContext } from "../../Utils/ExercisesContext";
import { Link } from "react-router-dom";

const Exercises = () => {
  let {
    ExercisesData,
    musclesData,
    Exercises,
    setExercises,
    muscles,
    setMuscles,
  } = useContext(ExercisesContext);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const displayedExercises = Exercises.slice(startIndex, lastIndex);

  const handlePageChange = (e, value) => {
    setPage(value);
    console.log(page);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ ml: "30px", mt: "60px", mb:'100px', fontWeight: "bold" }}
      >
        Show Exercises
      </Typography>

      {Exercises.length>0?<>
        <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: "40px" }}
      >
        {displayedExercises.map((exercise, index) => {
          return (
            <Paper key={index} elevation={4} sx={{ borderRadius: 3 }}>
              <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
                <img
                  src={`../../../assets/exercises-GIFs/${exercise.name}.gif`}
                  alt="Exercise"
                />
                <Stack direction="row">
                  <Button
                    sx={{
                      color: "#fff",
                      bgcolor: "#FF8080",
                      borderRadius: "20px",
                      mx: "10px",
                      "&:hover": { color: "#FF8080" },
                    }}
                  >
                    {exercise.muscle}
                  </Button>
                  <Button
                    sx={{
                      color: "#fff",
                      bgcolor: "#FFE086",
                      borderRadius: "20px",
                      mx: "10px",
                      "&:hover": { color: "#FFE086" },
                    }}
                  >
                    {exercise.difficulty}
                  </Button>
                </Stack>
                <Typography
                  sx={{
                    color: "black",
                    p: "20px",
                    fontSize: "20px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                >
                  {exercise.name}
                </Typography>
              </Link>
            </Paper>
          );
        })}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          my: 6,
          height:"200px"
        }}
      >
        <Pagination
          count={Math.ceil(Exercises.length / itemsPerPage)}
          page={page}
          color="error"
          onChange={handlePageChange}
        />
      </Box>
      </>:<Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh"
      }}
    >
      <CircularProgress color="error" size={60} />
    </Box>}
    </Box>
  );
};

export default Exercises;
