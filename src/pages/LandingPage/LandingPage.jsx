import React from 'react'
import AppAppBar from '../../components/AppBar/AppBar'
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import Pricing from '../../components/Pricing/Pricing'
import Footer from '../../components/Footer/Footer'
export default function LandingPage() {
  return (
    <div>
      <AppAppBar/>
      <Hero/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
