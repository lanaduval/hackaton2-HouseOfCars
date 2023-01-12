import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import arrowLeft from "../../assets/img/arrowLeft.png";
import arrowRight from "../../assets/img/arrowRight.png";
import instance from "../../helpers/axios";

import "./Caroussel.css";
import "./FilterBar.css";

function Caroussel() {
  // state
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [cars, setCars] = useState([]);

  // useEffect
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

  // pagination
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

  // Nous avons la const filterCars qui permet de filtrer les voitures !
  const filterCars = cars.filter(
    (car) =>
      (car.type === category || category === "") &&
      (car.city === location || location === "")
  );

  const currentCarsData = filterCars.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <div className="filtre_subnav">
        <form className="form_filtre">
          <label htmlFor="category-select">
            Category :{" "}
            <select
              id="category-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--</option>
              <option value="confort">Confort</option>
              <option value="casual">Casual</option>
            </select>
          </label>
          <label htmlFor="localisation-select">
            Location :{" "}
            <select
              id="localisation-select"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All</option>
              <option value="Paris">Paris</option>
              <option value="Lyon">Lyon</option>
              <option value="Bordeaux">Bordeaux</option>
              <option value="Marseille">Marseille</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Reims">Reims</option>
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
            {currentCarsData.map((car) => {
              return (
                <div key={car.id} className="card">
                  <img className="image-slider" src={car.img} alt="Cars" />
                  <h1 className="make-car">{car.make}</h1>
                  <h2 className="model-car">{car.model}</h2>
                  <Link to={`/cars/${car.id}`}>
                    <button type="button" className="button-show">
                      See more
                    </button>
                  </Link>
                  <button type="button" className="button-show">
                    Book
                  </button>
                </div>
              );
            })}
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
