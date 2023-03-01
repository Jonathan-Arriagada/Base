import React from "react";
import "./Carousel.css"

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide car-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/netflix.png" className="d-block w-100 car-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/spoti.png" className="d-block w-100 car-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/disney-plus.png" className="d-block w-100 car-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/crunchy.png" className="d-block w-100 car-image" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
