import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import ImageBanner from '../Components/ImageBanner'
import Products from '../Components/Products'
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="hero-content">
        {/* Content for the hero section */}
      </div>
      <div>
        <div className="container mx-auto">
          <ImageBanner />
        </div>
        {/* <Products></Products> */}
      </div>
      {/* Add other components or content */}
    </div>
  )
}

export default Home
