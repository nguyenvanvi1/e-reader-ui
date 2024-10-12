import React,{ useState } from 'react'
import { Box, Typography, Collapse,Button } from '@mui/material'

export default function Container() {
  const [open, setOpen] = useState(false);
  return (
    
    <Box>
      <Box sx={{
        marginTop:'100px',
        marginLeft:'20px'
      }}>
        <Typography sx={{color:'white',fontSize:'30px'}}>Empty library</Typography>
        <Typography sx={{color:'#999',fontSize:'26px'}} >Click Import to add books</Typography>
      </Box>
      <Box>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Thu gọn' : 'Mở rộng'}
        </Button>
        
      </Box>


    </Box>
  )
}
