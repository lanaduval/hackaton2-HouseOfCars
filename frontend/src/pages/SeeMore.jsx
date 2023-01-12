import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../helpers/axios";

import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";

export default function SeeMore() {
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

  return (
    <>
      <Navbar />

      <div className="seemoretotal">
        <div className="carpicture">
          <img src={cars.img} alt="car on the road" />
        </div>
        <div className="description">
          <p>Autonomy: {cars.autonomy}</p>

          <Link to={`/booking/${cars.id}`}>Booking this car</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
