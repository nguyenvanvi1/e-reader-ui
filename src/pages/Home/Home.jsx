import React from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/Container/Container'
import { Box, } from '@mui/material'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <>
      <Box
      display="flex"
      justifyContent="start"
      height="100vh"
      gap={2}
      backgroundColor='#555'
      >
        <Box>
          <Header/>
        </Box>
        <Box>
          <Menu/>
        </Box>
      </Box>
        
    </>
  )
}
