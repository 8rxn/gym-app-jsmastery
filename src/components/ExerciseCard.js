
import React from 'react'
import{Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'
const ExerciseCard = ({exercise}) => {
    const handleOnClick=()=>{
        window.scrollTo({top:0,left:100,behavior:'smooth'})

    }
  return (
    <Link className='exercise-card' to={`exercise/${exercise.id}`} onClick={handleOnClick}>
    <img src={exercise.gifUrl} alt='exercisegif' loading='lazy'/>
    <Stack direction='row'>
        <Button sx={{ml:'21px', color:'#FFF',background:'#ffa9a9', fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
    {exercise.bodyPart}
        </Button>
        <Button sx={{ml:'21px', color:'#FFF',background:'#fcc757', fontSize:'14px', borderRadius:'20px',textTransform:'capitalize'}}>
    {exercise.target}
        </Button>
    </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='20px'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard