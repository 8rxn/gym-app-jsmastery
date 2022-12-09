import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='none' sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px' >
<Link to='/'>
    <img src={Logo} alt="RxGym" style={{width:'50px',height:'50 px',margin:'0 20px'}}/>
</Link>
<Stack direction='row' gap='40px' fontSize='25px' alignItems='flex-end'>
    <Link to='/' style={{borderBottom:'3px solid red',textDecoration:'none',color:'black'}}>Home</Link>
    <a href="#exercises" style={{textDecoration:'none',color:'black'}}>Exercises</a>
</Stack>
    </Stack>
  )
}

export default Navbar