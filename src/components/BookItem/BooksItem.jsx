
import React from 'react'
import { Box, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, CardMedia, CardContent } from '@mui/material';
import './TextClamp.css'
export default function BooksItem() {
  return (
    <Box sx={{marginTop:'20px'}}>
      <Box sx={{
        display:'flex',
      }}>
        <Typography sx={{color:'white'}}>New</Typography>
        <MoreHorizIcon sx={{color:'white',marginLeft:'190px'}}/>
      </Box>
      <Box sx={{
        display:'flex'
      }}>
        <Card sx={{ maxWidth: 245 }}>
          <CardMedia
            component="img"
            height="290"
            image="https://i.pinimg.com/originals/38/63/2e/38632eac71e6ed2d5240bdf499d936fe.png" // Đường dẫn đến ảnh của bạn
            alt="Image description"
          />
        </Card>
        <Box sx={{paddingLeft:'20px', width:'300px'}}>
          <Typography sx={{
            color:'white',
            fontSize:'20px'
          }}>The Time Machine</Typography>
          <Typography sx={{
            paddingTop:'50px',
            color:'white'
          }}>Author: H. G. Wells</Typography>
          <Typography color='white'>Description:</Typography>
          <Typography color='white'>Publisher: Feedbooks</Typography>
          <Typography className='clamped-text'>Koodo Reader is an all-in-one eBook Koodo Reader is an all-in-one eBook Koodo Reader is an all-in-one eBook reader Koodo Reader is an all-in-one eBook reader 
          
           </Typography>
        </Box>
      </Box>
    </Box>
  )
}

