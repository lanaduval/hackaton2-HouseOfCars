import { useState } from "react";
import carsData from "../../services/carsData";
import arrowLeft from "../../assets/img/arrowLeft.png";
import arrowRight from "../../assets/img/arrowRight.png";

import "./Caroussel.css";

function Caroussel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(carsData.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentCarsData = carsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="slider-container">
      <button
        type="button"
        className="button-previous"
        onClick={handlePrevious}
        disabled={currentPage === 0}
      >
        <img className="arrow" src={arrowLeft} alt="Arrow" />
      </button>
      <div className="slider">
        <div className="cards">
          {currentCarsData.map((car) => (
            <div key={car.id} className="card">
              <img className="image-slider" src={car.img} alt="Cars" />
              <h1 className="make-car">{car.make}</h1>
              <h2 className="model-car">{car.model}</h2>
              <button type="button" className="button-show">
                See more
              </button>
              <button type="button" className="button-show">
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="button-next"
        onClick={handleNext}
        disabled={currentPage === Math.ceil(carsData.length / itemsPerPage) - 1}
      >
        <img className="arrow" src={arrowRight} alt="Arrow" />
      </button>
    </div>
  );
}

export default Caroussel;
