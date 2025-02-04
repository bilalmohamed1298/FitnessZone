import { Box } from '@mui/material'
import React, {useContext, useState} from 'react'
import Exercises from '../Components/Exercises/Exercises'
import SearchExercises from '../Components/SearchExercises/SearchExercises'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import { ExercisesContext } from '../Utils/ExercisesContext'

const Home = () => {

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home