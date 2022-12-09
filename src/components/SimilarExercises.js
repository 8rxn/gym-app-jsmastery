import { Stack,Box, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader'
import HorizontalScrollBar from './HorizontalScrollBar'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'50px'}}}>
      <Typography variant='h3' mb='33px' textTransform='capitalize' fontWeight='700' textAlign='center' mt={{lg:'50px', sm:'25px'}}  >
        Exercises That Target The Same Muscle Group

      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}} mb='55px'>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>
        :
        <Loader/>}

      </Stack>


      <Typography variant='h3' mb='33px' textTransform='capitalize' fontWeight='700' textAlign='center' mt={{lg:'50px', sm:'25px'}}  >
        Exercises That Use the Same Equipment

      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}} mb='55px'>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/>
        :
        <Loader/>}

      </Stack>
    </Box>
  )
}

export default SimilarExercises