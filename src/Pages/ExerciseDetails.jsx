import { Box } from "@mui/material";
import Detail from "../Components/ExerciseDetails/Detail/Detail";
import { ExercisesContext } from "../Utils/ExercisesContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseVideos from "../Components/ExerciseDetails/ExerciseVedios/ExerciseVedios";
import SimilarExercises from "../Components/ExerciseDetails/SimilarExercises/SimilarExercises";

const ExerciseDetails = () => {
  let { ExercisesData, Exercises, setExercises } = useContext(ExercisesContext);
  const [exerciseDetails, setexerciseDetails] = useState({});

  const params = useParams();
  const index = params.id;

  useEffect(() => {
    setExercises(ExercisesData);
  }, []);

  useEffect(() => {
    setexerciseDetails(Exercises[index - 1]);
  }, [Exercises, params]);

  console.log(exerciseDetails);

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {exerciseDetails ? (
        <>
          <Detail exerciseDetails={exerciseDetails} />
          <ExerciseVideos exerciseDetails={exerciseDetails} />
          <SimilarExercises
            Exercises={Exercises}
            exerciseDetails={exerciseDetails}
          />
        </>
      ) : (
        "Loading..."
      )}
    </Box>
  );
};

export default ExerciseDetails;
