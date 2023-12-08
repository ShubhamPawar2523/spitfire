import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselComp.css'

export default function CarouselComp() {
  return (
    <>
    <div>
        <section className="carousel">
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://static3.toyotabharat.com/images/homepage/banners/rumion-home-banner-1920x807.jpg?v=10082023" 
                        alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://static3.toyotabharat.com/images/homepage/banners/new-vellfire-home-banner-1920x807.jpg?v=03082023" 
                        alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://static3.toyotabharat.com/images/homepage/banners/wow-awesome-banner-1920x807.jpg?v=14042023" 
                        alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://www.galaxytoyota.in/public/storage/1004/vellfire-banner-1920x807.jpg" 
                        alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://www.galaxytoyota.in/public/storage/1001/hilux-live-a-richer-life-1920x807-(1).jpg" 
                        alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className='d-block w-100' 
                        src="https://www.galaxytoyota.in/public/storage/1002/hyryder-e-cng-banner-1920x807.jpg" 
                        alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    </div>
    </>
  )
}
