import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from "../../../../public/icons/right-arrow.png";
import LeftArrowIcon from "../../../../public/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => scrollPrev()}
      className="left-arrow"
      sx={{
        mb: 2,
        borderWidth: 3,
        borderRadius: "30%",
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => scrollNext()}
      className="right-arrow"
      sx={{
        borderWidth: 3,
        borderRadius: "30%",
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Button>
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

    // let filteredExerciseBodyPart = Exercises.filter((exercise)=>exercise.bodyPart === item)
    setExercises((Exercises) =>
      Exercises.filter((exercise) => exercise.muscle === item)
    );
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
                      top: 1340,
                      left: 0,
                      behavior: "smooth",
                    });
                    filterExerciseBodyPart(item);
                  }}
                >
                  <img
                    src="/icons/gym.png"
                    alt="Muscle"
                    style={{ width: "60px", height: "60px" }}
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
