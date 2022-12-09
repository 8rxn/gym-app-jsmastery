import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Details from '../components/Details'
import AltVideos from '../components/AltVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);

  const {id}= useParams();

  useEffect(() => {
    const fetchExercisesData= async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);

      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);


      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setequipmentExercises(equipmentExercisesData);

    }
    
    fetchExercisesData();
    
  }, [id])
  

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <AltVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail