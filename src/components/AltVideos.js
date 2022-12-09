import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AltVideos = ({exerciseVideos,name}) => {

  if(!exerciseVideos.length){
    return('Loading');
  }


  return (
    <Box mt={{lg:'100px',sm:'50px'}}>
      <Typography variant='h3' mb='33px' textTransform='capitalize' fontWeight='700' textAlign='center'>
        Watch <span style={{color:'red'}}>{name}</span>
      </Typography>
      <Stack direction={{lg:'row',sm:'column'}} spacing='50px' justifyContent='space-around' alignItems='center'>
      {exerciseVideos.slice(0,3).map((item,index)=>(
       <a
       key={index}
       className='exercise-video'
       href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
       target='_blank'
       rel='noreferrer'
       >
        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
        <Typography variant='h6' color='#000'>{item.video.title}</Typography>
        <Typography fontSize='0.7rem' color='grey'>{item.video.channelName}</Typography>
       </a>
      ))}
      </Stack>
    </Box>
  )
}

export default AltVideos