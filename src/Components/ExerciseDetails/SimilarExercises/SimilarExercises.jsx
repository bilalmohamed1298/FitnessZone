import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const SimilarExercises = ({ Exercises, exerciseDetails }) => {
  return (
    <Box
      sx={{
        my: { sm: 16, xs: 3 },
        mx: { sm: 8, xs: 3 },
      }}
    >
      <Box
        sx={{
          my: 15,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: { sm: "left", xs: "center" },
            textTransform: "capitalize",
          }}
        >
          More{" "}
          <span style={{ color: "#CC2526" }}>{exerciseDetails.muscle}</span>{" "}
          Exercises
        </Typography>
        <Stack m={3}>
          {Exercises.length > 0 ? (
            <>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                  gap: "40px",
                  justifyContent: { md: "left", xs: "center" },
                }}
              >
                {Exercises.filter(
                  (exercise) =>
                    exercise.muscle === exerciseDetails.muscle &&
                    exercise.id !== exerciseDetails.id
                ).slice(0, 3).length > 0 ? (
                  Exercises.filter(
                    (exercise) =>
                      exercise.muscle === exerciseDetails.muscle &&
                      exercise.id !== exerciseDetails.id
                  ).map((exercise, index) => (
                    <Paper key={index} elevation={2} sx={{ borderRadius: 3 }}>
                      <Link
                        className="exercise-card similarExe"
                        to={`/exercise/${exercise.id}`}
                        onClick={window.scrollTo({
                          top: 0,
                          left: 100,
                        })}
                      >
                        <img
                          src={`/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#f76b6b",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#f76b6b" },
                            }}
                          >
                            {exercise.muscle}
                          </Button>
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#fbd872",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#fbd872" },
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10, textAlign: "center" }}>
                    <SentimentVeryDissatisfiedIcon
                      style={{ fontSize: 60 }}
                      color="error"
                    />{" "}
                    <Typography fontWeight={"bold"}>
                      No similar muscle exercises are available
                    </Typography>
                  </Box>
                )}
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
        </Stack>
      </Box>
      <Box
        sx={{
          my: 15,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: { sm: "left", xs: "center" },
            textTransform: "capitalize",
          }}
        >
          More{" "}
          <span style={{ color: "#CC2526" }}>{exerciseDetails.difficulty}</span>{" "}
          Exercises
        </Typography>
        <Stack m={3}>
          {Exercises.length > 0 ? (
            <>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                  gap: "40px",
                  justifyContent: { md: "left", xs: "center" },
                }}
              >
                {Exercises.filter(
                  (exercise) =>
                    exercise.difficulty === exerciseDetails.difficulty &&
                    exercise.id !== exerciseDetails.id
                ).slice(0, 3).length > 0 ? (
                  Exercises.filter(
                    (exercise) =>
                      exercise.difficulty === exerciseDetails.difficulty &&
                      exercise.id !== exerciseDetails.id
                  ).map((exercise, index) => (
                    <Paper key={index} elevation={4} sx={{ borderRadius: 3 }}>
                      <Link
                        className="exercise-card similarExe"
                        to={`/exercise/${exercise.id}`}
                        onClick={window.scrollTo({
                          top: 0,
                          left: 100,
                        })}
                      >
                        <img
                          src={`/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#f76b6b",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#f76b6b" },
                            }}
                          >
                            {exercise.muscle}
                          </Button>
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#fbd872",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#fbd872" },
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10, textAlign: "center" }}>
                    <SentimentVeryDissatisfiedIcon
                      style={{ fontSize: 60 }}
                      color="error"
                    />{" "}
                    <Typography fontWeight={"bold"}>
                      No similar difficulty exercises are available
                    </Typography>
                  </Box>
                )}
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
        </Stack>
      </Box>
      <Box
        sx={{
          my: 15,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: { sm: "left", xs: "center" },
            textTransform: "capitalize",
          }}
        >
          More <span style={{ color: "#CC2526" }}>Equipment</span> Exercises
        </Typography>
        <Stack m={3}>
          {Exercises.length > 0 ? (
            <>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                  gap: "40px",
                  justifyContent: { md: "left", xs: "center" },
                }}
              >
                {Exercises.filter(
                  (exercise) =>
                    exercise.equipment === exerciseDetails.equipment &&
                    exercise.id !== exerciseDetails.id
                ).slice(0, 3).length > 0 ? (
                  Exercises.filter(
                    (exercise) =>
                      exercise.equipment === exerciseDetails.equipment &&
                      exercise.id !== exerciseDetails.id
                  ).map((exercise, index) => (
                    <Paper key={index} elevation={4} sx={{ borderRadius: 3 }}>
                      <Link
                        className="exercise-card similarExe"
                        to={`/exercise/${exercise.id}`}
                        onClick={window.scrollTo({
                          top: 0,
                          left: 100,
                        })}
                      >
                        <img
                          src={`/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#f76b6b",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#f76b6b" },
                            }}
                          >
                            {exercise.muscle}
                          </Button>
                          <Button
                            size="small"
                            sx={{
                              color: "#fff",
                              bgcolor: "#fbd872",
                              borderRadius: "20px",
                              mx: "10px",
                              "&:hover": { color: "#fbd872" },
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10, textAlign: "center" }}>
                    <SentimentVeryDissatisfiedIcon
                      style={{ fontSize: 60 }}
                      color="error"
                    />{" "}
                    <Typography fontWeight={"bold"}>
                      No similar equipment exercises are available
                    </Typography>
                  </Box>
                )}
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
        </Stack>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
