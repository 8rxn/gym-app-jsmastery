import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [exercises, setExercises] = useState(['all']);
  
  const [bodyPart, setBodyPart] = useState('all');


  return (
    <Box>
        <HeroBanner/>
        <SearchExercises 
        setExercises={setExercises} 
        setBodyPart={setBodyPart} 
        bodyPart={bodyPart} 
        />
        <Exercises
        
        bodyPart={bodyPart} 
        exercises={exercises} 
        setExercises={setExercises} 
        />
        
    </Box>
  )
}

export default Home