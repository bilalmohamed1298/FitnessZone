import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetails.name}`,
      options
    );
    setExerciseVideos(youtubeAPI.data.contents);
    console.log(exerciseVideos);
  };
  useEffect(() => {
    fetchYoutubeAPI();

  }, [exerciseDetails]);

  return (
    <>
      {exerciseVideos.length>0 ?
      <Box>
              <Typography>
        Watch <apan style={{color:'#CC2526'}}>{exerciseDetails.name}</apan> Videos
      </Typography>
      <Stack
        sx={{
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'center',
          gap:2
        }}
      >
      {exerciseVideos.slice(0,3).map((video,index)=>{
          return(
            <Box key={index}>
              <Stack>
                <img src={video.video.thumbnails[0].url} alt="Exercise Video" />
                {video.video.title}
              </Stack>
            </Box>
          )
        })
      }
      </Stack>
      </Box>
      :'Loading...'}
      </>
  )
};

export default ExerciseVideos;
