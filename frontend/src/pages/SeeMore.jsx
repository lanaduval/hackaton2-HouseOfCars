import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../helpers/axios";
import NavbarOtherPages from "../components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "../components/layout-components/Footer/Footer";
import "../assets/styles/SeeMoreStyle.css";

export default function SeeMore() {
  const { id } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    instance
      .get(`/cars/${id}`)
      .then((result) => {
        setCars(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="seemorepage">
      <NavbarOtherPages />

      <div className="seemoretotal">
        <div className="carpicture">
          <img src={cars.img} alt="car on the road" />
        </div>
        <div className="description">
          <p>Make: {cars.make}</p>
          <p>Model: {cars.model}</p>
          <p>Autonomy: {cars.autonomy}</p>
          <p>City: {cars.city}</p>
          <p>Miles: {cars.miles}</p>
          <p>Year: {cars.year}</p>
          <p>Seats: {cars.seats}</p>
          <p>Type: {cars.type}</p>

          <Link to={`/booking/${cars.id}`}>Booking this car</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
