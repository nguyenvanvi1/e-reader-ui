import React,{ useState } from 'react'
import { Box, Typography, Collapse,Button, Grid2 } from '@mui/material'
import BooksItem from '../BookItem/BooksItem';


export default function Container() {
  const [open, setOpen] = useState(false);
  return (
    
    <Box >
      {/* <Box sx={{
        marginTop:'100px',
        marginLeft:'20px'
      }}>
        <Typography sx={{color:'white',fontSize:'30px'}}>Empty library</Typography>
        <Typography sx={{color:'#999',fontSize:'26px'}} >Click Import to add books</Typography>
      </Box> */}
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <BooksItem/>
        </Grid2>
        <Grid2 size={6}>
          <BooksItem/>
        </Grid2>
        <Grid2 size={6}>
          <BooksItem/>
        </Grid2>
        <Grid2 size={6}>
          <BooksItem/>
        </Grid2>
      </Grid2>

    </Box>
  )
}
