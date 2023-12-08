import React from 'react';
import './TrendingComp.css';
import carData from './trendingData';

export default function BudgetComp() {
  return (
    <>
      <div className="container text-center">
        <h3>Trending near you!!!</h3>
        <div className="row">
          {carData.map((car) => (
            <div key={car.id} className="col">
              <div className="card">
                <img src={car.image} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <p className="card-text">{car.description}</p>
                  <a href="/" className="btn btn-primary">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
