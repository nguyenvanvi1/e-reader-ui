import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import LayersIcon from '@mui/icons-material/Layers';
export default function Header() {
  return (
    <Box>
        <Box 
            display="flex"
        >
            <MenuIcon sx={{fontSize:40, color:'white',margin:2}}/>
            <Typography sx={{fontSize:24, textAlign:'center',margin:2.4,color:'white', fontWeight:700}}>KOODO</Typography>
        </Box>

        <Box sx={{
            marginLeft:2
        }}>
            <Box sx={{display:'flex' ,padding:'10px',}}>
                <HomeIcon sx={{fontSize:24,color:'white'}}/>
                <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Books</Typography>
            </Box>
            <Box sx={{display:'flex' ,padding:'10px'}}>
                <FavoriteIcon sx={{fontSize:24,color:'white'}} />
                <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Favorites</Typography>
            </Box>
            <Box sx={{display:'flex' ,padding:'10px'}}>
                <LightbulbIcon sx={{fontSize:24,color:'white'}}/>
                <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Notes</Typography>
            </Box>
            <Box sx={{display:'flex' ,padding:'10px'}}>
                <AutoFixHighIcon sx={{fontSize:24,color:'white'}}/>
                <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Highlights</Typography>
            </Box>
            <Box sx={{display:'flex' ,padding:'10px'}}>
                <DeleteIcon sx={{fontSize:24,color:'white'}}/>
                <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Trash</Typography>
            </Box>
            <Typography sx={{fontSize:16,color:'white'}}>Shelf</Typography>
            <Box
            sx={{
                height: '1px',          // Độ dày
                backgroundColor: 'white', // Màu đen
                width: '100%',          // Chiều rộng toàn bộ
            }}
            />
            <Box sx={{
                
            }}>
                <Box sx={{display:'flex' ,padding:'10px'}}>
                    <LayersIcon sx={{fontSize:24,color:'white'}}/>
                    <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Study</Typography>
                </Box>
                <Box sx={{display:'flex' ,padding:'10px'}}>
                    <LayersIcon sx={{fontSize:24,color:'white'}}/>
                    <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Work</Typography>
                </Box>
                <Box sx={{display:'flex' ,padding:'10px'}}>
                    <LayersIcon sx={{fontSize:24,color:'white'}}/>
                    <Typography sx={{fontSize:16, paddingLeft:2,fontWeight:300,color:'white'}}>Entertainment</Typography>
                </Box>
            </Box>
        </Box>
        
    </Box>
  )
}
