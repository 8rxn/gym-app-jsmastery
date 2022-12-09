import { Box, Typography,Button } from '@mui/material'
import React from 'react'
import HeroBannerImg from '../assets/logo/banner.png'



const HeroBanner = () => {
  return (
    
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color='#FF2625' fontWeight="600" fontSize="22px" >
            Fitness Club
        </Typography>

    <Typography fontWeight='700' fontSize='32px' mt='32px' mb='20px'>
        Sweat, Smile <br/> and repeat
    </Typography>
    <Typography fontSize='22px' fontWeight='500' mb='15px'>
        Check out the most effectice exercises
    </Typography>

    <Button variant='contained' color='error' href="#exercises" scroll='smooth' sx={{backgroundColor:'red',padding:'10px'}}> Explore Exercises</Button>
    <Typography fontWeight='900' fontSize='200px' sx={{opacity:0.1, color:'#1a1a1a'}}>
        Exercises
    </Typography>
    <img src={HeroBannerImg} alt="banner"  className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner