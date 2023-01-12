import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../helpers/axios";
import "../assets/styles/CarReservationForm.css";
import NavbarOtherPages from "../components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "../components/layout-components/Footer/Footer";

function CarReservationForm() {
//   const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { id } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    instance
      .get("/cars/" + id)
      .then((result) => {
        setCars(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(cars);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    
  };

  return (
    <>
      <NavbarOtherPages />
      <div className="BodyForm">
        <div className="CarDescription">
          <p className="CarTitle">Car description:</p>
          <img src={cars.img} alt="car on the road" />
          <p>Autonomy: {cars.autonomy}</p>
        </div>

        <form className="FormResa" onSubmit={handleSubmit}>
          <label className="LabelResa">
            Start Date:
            <input
              className="InputResa"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="LabelResa">
            End Date:
            <input
              className="InputResa"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <div className="SubmitResa">
            <button className="SubmitResa" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
        <Footer />
      </div>
    </>
  );
}

export default CarReservationForm;
