import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
                  justifyContent: { lg: "left", xs: "center" },
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
                          src={`../../../assets/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
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
                            size="small"
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10 }}>
                    <Typography fontWeight={"bold"}>
                      There is no similar muscle exercises{" "}
                      <span style={{ color: "#CC2526", fontWeight: "bold" }}>
                        :(
                      </span>
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
                  justifyContent: { lg: "left", xs: "center" },
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
                          src={`../../../assets/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
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
                            size="small"
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10 }}>
                    <Typography fontWeight={"bold"}>
                      There is no similar difficulty exercises{" "}
                      <span style={{ color: "#CC2526", fontWeight: "bold" }}>
                        :(
                      </span>
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
                  justifyContent: { lg: "left", xs: "center" },
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
                          src={`../../../assets/exercises-GIFs/${exercise.name}.gif`}
                          alt="Exercise"
                        />
                        <Stack direction="row">
                          <Button
                            size="small"
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
                            size="small"
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
                  ))
                ) : (
                  <Box sx={{ height: "150px", mt: 10 }}>
                    <Typography fontWeight={"bold"}>
                      There is no similar equipment exercises{" "}
                      <span style={{ color: "#CC2526", fontWeight: "bold" }}>
                        :(
                      </span>
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
