import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { ExercisesContext } from "../../Utils/ExercisesContext";
import { Link } from "react-router-dom";

const Exercises = () => {
  let { Exercises } = useContext(ExercisesContext);
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;
  const startIndex = (page - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const displayedExercises = Exercises.slice(startIndex, lastIndex);

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ ml: "30px", mt: "60px", mb: "100px", fontWeight: "bold" }}
      >
        Start Training
      </Typography>

      {Exercises.length > 0 ? (
        <>
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
                  <Link
                    className="exercise-card"
                    to={`/exercise/${exercise.id}`}
                  >
                    <img
                      src={`/exercises-GIFs/${exercise.name}.gif`}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              my: 6,
              height: "200px",
            }}
          >
            <Pagination
              count={Math.ceil(Exercises.length / itemsPerPage)}
              page={page}
              color="error"
              onChange={handlePageChange}
              onClick={() => {
                window.scrollTo({
                  top: 1340,
                });
              }}
            />
          </Box>
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

export default Exercises;
