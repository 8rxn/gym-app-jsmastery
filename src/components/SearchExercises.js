import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";


const SearchExercises = ({setExercises, setBodyPart,bodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

 useEffect(() => {
 const fetchExercisesData= async()=>{
  // const bodyParts= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
  const bodyParts= [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"
  ]
  setBodyParts(['all',...bodyParts]);
}

fetchExercisesData()
}, [])
 
  const handleSearch = async () => {
    if (search) {
      console.log("hello");
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sm: "30px" } }}
        mt="20px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" pt="36px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search For Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "red",
            color: "white",
            textTransfrom: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "10px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>


      <Box sx={{position:'relative',width:'100%', p:'20px'}}>
          <HorizontalScrollBar data={bodyParts}
          isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}  />
      </Box>

    </Stack>
  );
};

export default SearchExercises;
