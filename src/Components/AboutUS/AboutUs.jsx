import React from 'react';
import NavbarComp from '../NavbarComp/NavbarComp';
import FooterComp from '../FooterComp/FooterComp';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <>
      <div>
        <NavbarComp />
        <div className="container">
          <h2>QUALITY YOU CAN TRUST</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="img">
              <img
                src="https://static.toyotabharat.com/images/toyota-in-india/about/masakazu.png"
                className="img-fluid"
                alt="Toyota Leadership"
              />
            </div>
            <div className="text-container">
              <p>
                At Toyota, we uphold the philosophy of continuous improvement (Kaizen) because we believe that there is always scope to do better. It is this very philosophy that drives us towards quality, making it a way of life at Toyota.
                <br />
                Our firm belief in putting customers first has constantly enabled us to respond effectively to your needs, whether in terms of quality, service, or the driving experience.
                <br />
                Toyota's renowned reputation of Quality Durability and Reliability (QDR) has led our steady growth in the Indian automotive market. We are proud to declare that over 1 million Indians are part of the ever-growing Toyota family.
                <br />
                We also strive towards developing a more sustainable future and being pioneers in the Hybrid Technology is our first step towards this movement. Through initiatives focused on education, community development, and the environment, we aim to create a company that works in harmony with nature and society.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>OUR TEAM</h2>
          <hr />
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://static.toyotabharat.com/images/toyota-in-india/about/masakazu.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://static.toyotabharat.com/images/toyota-in-india/about/masakazu.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://static.toyotabharat.com/images/toyota-in-india/about/masakazu.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>EMPOWERING EMPLOYEES</h2>
          <hr />
          <p className="flex">
            Employees are the main source of inspiration and strength for a company. We, at Toyota, strive to reflect 'Continuous Improvement' and 'Respect for People' in all our activities. Employee suggestions are taken very seriously and implemented to improve the working environment.
            <br />
            Training programs are a regular feature in Toyota plants across Japan, Taiwan, and Indonesia. Quality Circles ensure teamwork, innovation, and productivity. TKM's concept of 'Information Time' or I-Time facilitates direct communication between team members and leaders.
            <br />
            A fully-equipped canteen, lockers, healthcare centers, round-the-clock doctors & commuting facilities are just some of the ways the company ensures that employees get the best of opportunities to grow and excel.
          </p>
        </div>
        <br />
        <FooterComp />
      </div>
    </>
  );
}
