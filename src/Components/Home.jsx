import React from 'react'
import NavbarComp from './NavbarComp/NavbarComp.jsx'
import FooterComp from './FooterComp/FooterComp.jsx'
import CarouselComp from './CarouselComp/CarouselComp.jsx'
import TrendingComp from './TrendingComp/TrendingComp.jsx'
import PremiumCollection from './PremiumComp/PremiumCollection.jsx'

export default function Home() {
  return (
    <div>
        <NavbarComp/>
        <CarouselComp/>
        <TrendingComp/>
        <PremiumCollection/>
        <FooterComp/>
    </div>
  )
}