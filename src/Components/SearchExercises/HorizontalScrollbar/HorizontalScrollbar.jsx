import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from "../../../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../../../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrolbar = ({
  muscles,
  Exercises,
  setExercises,
  ExercisesData,
}) => {
  const [bodyPart, setBodyPart] = useState("");

  const filterExerciseBodyPart = (item) => {
    setExercises(ExercisesData);
    console.log(Exercises);
    // let filteredExerciseBodyPart = Exercises.filter((exercise)=>exercise.bodyPart === item)
    setExercises((Exercises) =>
      Exercises.filter((exercise) => exercise.muscle === item)
    );
    console.log(ExercisesData);
    console.log(Exercises);
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {muscles.length > 0
        ? muscles.map((item) => {
            return (
              <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
              >
                <Stack
                  type="button"
                  className="bodyPart-card"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "210px",
                    borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                    p: "30px",
                  }}
                  onClick={() => {
                    setBodyPart(item);
                    window.scrollTo({
                      top: 1300,
                      left: 100,
                      behavior: "smooth",
                    });
                    filterExerciseBodyPart(item);
                  }}
                >
                  <img
                    src="../../assets/icons/gym.png"
                    alt="bodypartPhoto"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      my: "10px",
                    }}
                  >
                    {item.toUpperCase()}
                  </Typography>
                </Stack>
              </Box>
            );
          })
        : ""}
    </ScrollMenu>
  );
};

export default HorizontalScrolbar;
