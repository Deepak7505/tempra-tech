import React from 'react'
import LimitedOfferHeader from '../headers/LimitedOfferHeader'
import Header from '../headers/Header'
import HeroCarousel from '../heroSection/HeroCarousel'
import ProductList from '../categories/ProductList'
import Footer from '../footer/Footer'
import ImageZoom from '../sendQuerys/ImageZoom'
import ProductPage from '../sendQuerys/ProductPage'
import Testimonial from './Testimonial'
import TestimonialsCarousel from './TestimonialsCarousel'
import CustomerCounter from './CustomerCounter'
import StatsSection from './StatsSection'
import AvailablePlatforms from './AvailablePlatforms'

const Home = () => {


  return (
    <div>
        <HeroCarousel />
        <ProductList />
        <Testimonial />
        <AvailablePlatforms />
    </div>
  )
}

export default Home