import React from 'react';
import './PremiumCollection.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import premiumData from './premiumData';

export default function PremiumCollection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className='container trending'>
        <h3>Premium Collection</h3>
        <Carousel responsive={responsive}>
          {premiumData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="/" className="btn btn-primary">
                  Know More
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}