import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { Box,TextField,Collapse, Typography, colors } from '@mui/material'
export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleClose = ()=>{
    setOpen(!open)
}
  return (
    
    <Box>
        <Stack direction="row" spacing={2}
        sx={{
          position:'relative',
            marginTop:'10px',
            marginLeft:'20px'
        }}
        onClick={handleClose}
        >
            <Avatar sx={{
                bgcolor: deepPurple[500],
                }}>v</Avatar>
        </Stack>
        <Collapse in={open} sx={{backgroundColor:'#0755a3',position:'absolute',right:'0px',top:'52px', width:'100px',borderRadius:'5px'}}
                    >
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px',paddingTop:'7px'}}>Profile</Typography></Box>
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px',paddingTop:'7px'}}>Setting</Typography></Box>
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px',paddingTop:'7px'}}>Support</Typography></Box>
                        <Box><Typography sx={{color:'white',fontSize:'16px',paddingLeft:'20px',paddingTop:'7px'}}>Logout</Typography></Box>
        </Collapse>
    </Box>
    
  )
}
