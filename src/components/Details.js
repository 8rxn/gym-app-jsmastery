import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Details = ({ exerciseDetail, setLoading }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  const extraDetail =[
    {
      icon: BodyPartImage,
      name:bodyPart
    },
    
    {
      icon: TargetImage,
      name: target
    },
    
    {
      icon: EquipmentImage,
      name:equipment
    }
    

  ]
  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      width="100%"
      justifyContent="space-around"
      direction= {{ lg: "row", sm: "column" }}
      alignItems='center'
      mt="100px"
    >
      <img
        src={gifUrl}
        alt="Workout.gif"
        className="detail-image"
        loading="lazy"
        style={{ width: "", height: "" }}
        
      />
      <Stack direction="column" sx={{ width: { lg: "50%", xs: "70%" } }}>
        <Typography
          fontWeight="650"
          fontSize="50px"
          textAlign="left"
          sx={{ mt: { lg: "50px", xs: "20px" } }}
          mb="50px"
          
        >
          {name}
        </Typography>

        <Typography
          fontSize="25px"
          textAlign="left"
          mb={{lg:'100px',sm:'50px'}}
          sx={{ color: "grey" }}
        >
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}.<br /> It will help you improve your mood and
          gain energy.
        </Typography>
        {extraDetail.map((item,index)=>(
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button sx={{backgroundL:'beige',borderRadius:'50%',width:'100px',height:'100px'}}>
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
