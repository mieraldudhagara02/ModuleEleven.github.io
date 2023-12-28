import React from 'react';
import Banner_1 from '../Components/Assets/Images/Banner-1.jpg';
import Banner_2 from '../Components/Assets/Images/Banner-2.jpg';
import Banner_3 from '../Components/Assets/Images/Banner-3.jpg';
import {Button} from 'react-bootstrap';

export default function content() {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <Button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"/>
          <Button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" />
          <Button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="100">
            <img src={Banner_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="200">
            <img src={Banner_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Banner_3} className="d-block w-100" alt="..." />
          </div>
        </div>
          <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </Button>
          <Button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </Button>
      </div>
    </>
  )
}
