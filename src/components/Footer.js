import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/logo/logo.png'

const Footer = () => {
  return (
    <Box sx={{background:'#2B3A55', color:'white'}} p='50px' textAlign='center'>
     <Stack direction='row' alignItems='center' justifyContent='center' spacing='33px' mb='20px'>
     <img src={Logo} style={{width:'50px', height:'50px'}} alt="" />
     <Typography className='footer-text' fontSize='30px' fontWeight='bold'  textAlign='center' >
        gymrxn
      </Typography>

     </Stack>

     <Typography variant='h5' fontWeight='600' color='#CE7777'> Made With ❤ <br/>
<a href="https://www.github.com/8rxn" 
style={{textDecoration:'none', color:'#CE7777'}}> 
by rxn</a> </Typography>

    </Box>
  )
}

export default Footer