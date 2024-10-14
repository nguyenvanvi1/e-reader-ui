
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Divider,
  } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
import { Facebook, Google } from '@mui/icons-material';
export default function Login() {
  return (
    <Box sx={{backgroundColor:'#555',height:'100vh'}}>
        <Container maxWidth="xs">
      <Box
        sx={{
          padding: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{
            fontSize:'30px',
            color:'white'
        }}
        
        component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Màu viền
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Màu viền khi hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Màu viền khi focus
                },
              },
              '& .MuiInputLabel-root': {
                color: 'white', // Màu của label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Màu của label khi focus
              },
              '& .MuiOutlinedInput-input': {
                color: 'white', // Màu của văn bản bên trong
                backgroundColor: '#555', // Màu nền
              },
            }}
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Màu viền
              },
              '&:hover fieldset': {
                borderColor: 'white', // Màu viền khi hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Màu viền khi focus
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Màu của label
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Màu của label khi focus
            },
            '& .MuiOutlinedInput-input': {
              color: 'white', // Màu của văn bản bên trong
              backgroundColor: '#555', // Màu nền
            },
          }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Link to="/" variant="body2" sx={{ float: 'right', mb: 2,}}>
            <Typography>
            Forgot password?
            </Typography>
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Box display="flex" justifyContent="center">
            <Typography variant="body2" color='white' marginTop='3px'>Don’t have an account?&nbsp;</Typography>
            <Link to="/register" variant="body2">
              <Typography sx={{color:'white',textDecoration:'none'}}>Sign up</Typography>
            </Link>
          </Box>
          <Divider sx={{ my: 2 }}>Or</Divider>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              startIcon={<Google />}
              fullWidth
              sx={{ ml: 1, backgroundColor: '#db4a39', color: 'white' }}
            >
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </Box>
  )
}
