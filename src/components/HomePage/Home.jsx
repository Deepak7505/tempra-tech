import React from 'react'
import LimitedOfferHeader from '../headers/LimitedOfferHeader'
import Header from '../headers/Header'
import HeroCarousel from '../heroSection/HeroCarousel'
import ProductList from '../categories/ProductList'
import Footer from '../footer/Footer'
import ImageZoom from '../sendQuerys/ImageZoom'
import ProductPage from '../sendQuerys/ProductPage'

const Home = () => {


  return (
    <div>
        <LimitedOfferHeader />
        <Header />
        <HeroCarousel />
        <ProductList />
        <Footer /> 
        <div>
        <h1 className='font-semibold text-xl text-center my-3'>@ Kundan Bhaiya please give your suggetion </h1>
        <ProductPage />
        </div>
    </div>
  )
}

export default Home