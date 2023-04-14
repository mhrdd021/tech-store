import React from 'react'
//components
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import SpecialOffer from '../components/specialOffer/SpecialOffer'
import Watch from '../components/watchOffer/Watch'

const HomePage = ({ HeroData, ProductsData }) => {
  return (
    <div className='w-full h-auto flex items-center justify-center flex-col'>
        <Hero HeroData={HeroData} className="flex items-center justify-center"/>
        <Features />
        <SpecialOffer ProductsData={ProductsData}/>
        <Watch ProductsData={ProductsData}/>
    </div>
  )
}

export default HomePage