import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../helpers/axios";

import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";

export default function SeeMore() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    instance
      .get("/cars/:id")
      .then((result) => {
        setCars(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      {cars && (
        <div className="seemoretotal">
          <div className="carpicture">
            <p>Image Voiture</p>
          </div>
          <div className="description">
            <p>Autonomy: {cars.autonomy}</p>

            <Link to="/about">Booking this car</Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
