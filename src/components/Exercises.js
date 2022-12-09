import React,{useEffect,useState} from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'

import {exerciseOptions,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises,bodyPart,setExercises}) => {
const [currentPage, setCurrentPage] = useState(1);
const paginate= (e,value)=>{
  setCurrentPage(value);
  window.scrollTo({top:1800,behavior:"smooth"})
}

useEffect(()=>{
const fetchExercisesData= async()=>{
    let exercisesData=[];
    exercisesData=(bodyPart==='all')?await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    )
    :
    await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}`,
      exerciseOptions
    );
    
    setExercises(exercisesData);

}
fetchExercisesData();
// eslint-disable-next-line
},[bodyPart])



const indexOfLastExercise= currentPage*9;
const indexOfFirstExercise= indexOfLastExercise- 9;

const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  return (
    <Box id='exercises'
    sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
      >
        <Typography variant='h3' mb='46px'>
          Showing Results
        </Typography>
        <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise,index)=>(<ExerciseCard exercise={exercise} key={index} />))}
        </Stack>
        <Stack mt='100px' alignItems='center'>
        {exercises.length>9 &&(
          <Pagination
            color='standard'
            shaper='rounded'
            count={Math.ceil(exercises.length/9)}
            page={currentPage}
            onChange={(e,value)=>{paginate(e,value)}} 
            size='large'/>
        )}
        </Stack>

    </Box>
  )
}

export default Exercises