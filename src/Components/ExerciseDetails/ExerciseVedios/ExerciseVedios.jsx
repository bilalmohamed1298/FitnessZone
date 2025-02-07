import { Box, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ExerciseVideos = ({ exerciseDetails }) => {
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7931943df5mshd164a9d33e8d152p11abf3jsn4f86e8c06817",
      "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  const fetchYoutubeAPI = async () => {
    const youtubeAPI = await axios.request(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetails.name} exercise`,
      options
    );
    setExerciseVideos(youtubeAPI.data.contents);
  };
  useEffect(() => {
    fetchYoutubeAPI();
  }, [exerciseDetails]);

  return (
    <>
      {exerciseVideos.length > 0 ? (
        <Box
          sx={{
            my: { sm: 16, xs: 3 },
            mx: { sm: 8, xs: 3 },
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              fontWeight: "bold",
              my: 10,
              textAlign: { sm: "left", xs: "center" },
            }}
          >
            Watch{" "}
            <span style={{ color: "#CC2526" }}>{exerciseDetails.name}</span>{" "}
            Videos
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: { md: "left", xs: "center" },
              gap: 2,
            }}
          >
            {exerciseVideos.slice(0, 3).map((video, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    ":hover": { scale: "1.1", transitionDuration: "0.5s" },
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "5%",
                      m: 1,
                      width: { lg: "400px", xs: "300px" },
                    }}
                  >
                    <Stack sx={{ justifyContent: "center", width: "100%" }}>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <img
                          src={video.video.thumbnails[0].url}
                          alt="Exercise Video"
                          style={{
                            width: "100%",
                            borderRadius: "10px 10px 0 0",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "black",
                            fontWeight: "700",
                            fontSize: "16px",
                            mt: 1,
                            textAlign: "left",
                            p: 1,
                            height: "80px",
                            textWrap: "wrap",
                          }}
                        >
                          {video.video.title}
                        </Typography>
                      </a>
                    </Stack>
                  </Paper>
                </Box>
              );
            })}
          </Stack>
        </Box>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            color: "#CC2526",
            fontWeight: "bold",
            my: 16,
          }}
        >
          Videos Coming Soon...
        </Typography>
      )}
    </>
  );
};

export default ExerciseVideos;
