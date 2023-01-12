import { useState, useEffect } from "react";
import arrowLeft from "../../assets/img/arrowLeft.png";
import arrowRight from "../../assets/img/arrowRight.png";
import instance from "../../helpers/axios";

import "./Caroussel.css";
import "./FilterBar.css";

function Caroussel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    instance
      .get("/cars")
      .then((result) => {
        setCars(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const itemsPerPage = 3;

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(cars.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filterCars = cars;

  const currentCarsData = cars.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <div className="filtre_subnav">
        <form className="form_filtre">
          <label>
            Category :
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--</option>
              {filterCars.map((car) => (
                <option key={car.id} value="">{car.type}</option>
              ))}
            </select>
          </label>
          <label>
            Localisation :
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All</option>
              {filterCars.map((car) => (
                <option key={car.id} value="location">{car.city}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
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
            {currentCarsData
              .filter(
                (car) =>
                  car.city === location ||
                  car.type === category ||
                  location === ""
              )
              .map((car) => (
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
          disabled={currentPage === Math.ceil(cars.length / itemsPerPage) - 1}
        >
          <img className="arrow" src={arrowRight} alt="Arrow" />
        </button>
      </div>
    </>
  );
}

export default Caroussel;
