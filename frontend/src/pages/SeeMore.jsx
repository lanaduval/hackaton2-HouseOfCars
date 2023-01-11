import { Link } from "react-router-dom";
import "./SeeMoreStyle.css";

import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";

export default function SeeMore() {
  return (
    <>
      <Navbar />
      <div className="seemoretotal">
        <div className="carpicture">
          <p>Image Voiture</p>
        </div>
        <div className="description">
          <ul>
            <li>Car caracteristic</li>
            <li>Car caracteristic</li>
            <li>Car caracteristic</li>
            <li>Car caracteristic</li>
          </ul>
          <Link to="/about">Booking this car</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
