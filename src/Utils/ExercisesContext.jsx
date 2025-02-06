import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let ExercisesContext = createContext([]);

export function ExercisesContextProvider({ children }) {
  let [ExercisesData, setExercisesData] = useState([]);
  let [musclesData, setMusclesData] = useState([]);
  let [Exercises, setExercises] = useState([]);
  let [muscles, setMuscles] = useState([]);

  const fetchAPI = async () => {
    let exercisesAPI = await axios.get(
      "https://api.api-ninjas.com/v1/exercises?X-Api-Key=5yLwLgrI6nmqhj47BXklPA==r9uUE7MWfoFS33iR"
    );
    const idExercisesAPI = exercisesAPI.data.map((exercise, index) => ({
      ...exercise,
      id: index + 1,
    }));
    setExercisesData([...idExercisesAPI]);
  };

  const getmusclesData = () =>
    (musclesData = ExercisesData.map((exercise) => exercise.muscle));

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    getmusclesData();
  }, [ExercisesData]);

  useEffect(() => {
    if (musclesData.length > 0 && muscles.length === 0) {
      setMuscles([...musclesData]);
      setExercises([...ExercisesData]);
    }
  }, [ExercisesData]);

  return (
    <ExercisesContext.Provider
      value={{
        ExercisesData,
        musclesData,
        Exercises,
        setExercises,
        muscles,
        setMuscles,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
}
