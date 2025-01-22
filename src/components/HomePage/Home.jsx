import React from 'react'
import LimitedOfferHeader from '../headers/LimitedOfferHeader'
import Header from '../headers/Header'
import HeroCarousel from '../heroSection/HeroCarousel'
import ProductList from '../categories/ProductList'
import Footer from '../footer/Footer'

const Home = () => {


  return (
    <div>
        <LimitedOfferHeader />
        <Header />
        <HeroCarousel />
        <ProductList />
        <Footer />
    </div>
  )
}

export default Home