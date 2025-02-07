import { Box, CircularProgress } from "@mui/material";
import Detail from "../Components/ExerciseDetails/Detail/Detail";
import { ExercisesContext } from "../Utils/ExercisesContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseVideos from "../Components/ExerciseDetails/ExerciseVedios/ExerciseVedios";
import SimilarExercises from "../Components/ExerciseDetails/SimilarExercises/SimilarExercises";
import BackgroundDecoration from "../Components/BackgroundDecoration/BackgroundDecoration";

const ExerciseDetails = () => {
  let { ExercisesData, Exercises, setExercises } = useContext(ExercisesContext);
  const [exerciseDetails, setexerciseDetails] = useState({});

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setExercises(ExercisesData);
  }, []);

  useEffect(() => {
    setexerciseDetails(Exercises[id - 1]);
  }, [Exercises, id]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {exerciseDetails ? (
        <>
          <BackgroundDecoration/>
          <Detail exerciseDetails={exerciseDetails} />
          <ExerciseVideos exerciseDetails={exerciseDetails} id={id} />
          <SimilarExercises
            Exercises={Exercises}
            exerciseDetails={exerciseDetails}
          />
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

export default ExerciseDetails;
