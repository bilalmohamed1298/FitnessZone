import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { ExercisesContext } from "../../Utils/ExercisesContext";
import { Link } from "react-router-dom";
import BackgroundDecoration from "../BackgroundDecoration/BackgroundDecoration";

const AllExercises = () => {
  let { ExercisesData, Exercises, setExercises } = useContext(ExercisesContext);

  useEffect(() => {
    setExercises(ExercisesData);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <BackgroundDecoration />
      <Typography
        variant="h4"
        sx={{ ml: "30px", mt: "60px", mb: "100px", fontWeight: "bold" }}
      >
        All Exercises
      </Typography>

      {Exercises.length > 0 ? (
        <>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            sx={{ gap: "40px", mb: 16 }}
          >
            {Exercises.map((exercise, index) => {
              return (
                <Paper key={index} elevation={4} sx={{ borderRadius: 3 }}>
                  <Link
                    className="exercise-card"
                    to={`/exercise/${exercise.id}`}
                  >
                    <img
                      src={`../../../public/exercises-GIFs/${exercise.name}.gif`}
                      alt="Exercise"
                    />
                    <Stack direction="row">
                      <Button
                        sx={{
                          color: "#fff",
                          bgcolor: "#f76b6b",
                          borderRadius: "20px",
                          mx: "10px",
                          "&:hover": { color: "#f76b6b" },
                          fontWeight: "bold",
                        }}
                      >
                        {exercise.muscle}
                      </Button>
                      <Button
                        sx={{
                          color: "#fff",
                          bgcolor: "#fbd872",
                          borderRadius: "20px",
                          mx: "10px",
                          "&:hover": { color: "#fbd872" },
                          fontWeight: "bold",
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
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress color="error" size={60} />
        </Box>
      )}
    </Box>
  );
};

export default AllExercises;
