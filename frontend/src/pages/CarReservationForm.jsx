import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCar,
  faUsers,
  faLocationArrow,
} from "@fortawesome/fontawesome-free-solid";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";
import instance from "../helpers/axios";
import "../assets/styles/CarReservationForm.css";
import NavbarOtherPages from "../components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "../components/layout-components/Footer/Footer";

function CarReservationForm() {
  // gère l'envoi mail
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.warn(error.text);
        }
      );
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
    <>
      <NavbarOtherPages />
      <div className="BodyForm">
        <div className="CarDescription">
          <h1 className="CarTitle"> Car Description </h1>
          <img src={cars.img} alt="car on the road" />
          <FontAwesomeIcon
            className="fab fa-react fa-2x"
            style={{
              color: "#F58A07",
              marginInline: "1rem",
              paddingBlock: "1rem",
            }}
            icon={faCar}
          />
          <p> Make: {cars.make} </p>
          <p>Model: {cars.model}</p>
          <p>Autonomy: {cars.autonomy}</p>
          <p>Miles: {cars.miles}</p>
          <p>Year: {cars.year}</p>
          <p>Type: {cars.type}</p>
          <FontAwesomeIcon
            className="fab fa-react fa-2x"
            style={{
              color: "#FFF",
              marginInline: "1rem",
              paddingBlock: "1rem",
            }}
            icon={faUsers}
          />
          <p>Seats: {cars.seats}</p>
          <FontAwesomeIcon
            className="fab fa-react fa-2x"
            style={{
              color: "#FFF",
              marginInline: "1rem",
              paddingBlock: "1rem",
            }}
            icon={faLocationArrow}
          />
          <p>City: {cars.city}</p>
        </div>

        <h2> Ready ? </h2>
        <h2> Thanks to fill up the form to book it !</h2>
        <FontAwesomeIcon
          className="fab fa-react fa-2x"
          style={{
            color: "#FFF",
            marginInline: "1rem",
            paddingBlock: "1rem",
          }}
          icon={faCheckSquare}
        />
        <form className="FormResa" ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="make" value={cars.make} />
          <input type="hidden" name="model" value={cars.model} />
          <input type="hidden" name="city" value={cars.city} />
          <input type="hidden" name="city" value={cars.miles} />
          <input type="hidden" name="seats" value={cars.seats} />

          <label className="LabelResa">
            Firstname:
            <input className="InputResa" type="Texte" name="firstname" />
          </label>
          <label className="LabelResa">
            Lastname:
            <input className="InputResa" type="Texte" name="lastname" />
          </label>
          <label className="LabelResa">
            Email:
            <input className="InputResa" type="email" />
          </label>

          <label className="LabelResa">
            Start Date:
            <input
              className="InputResa"
              type="date"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="LabelResa">
            End Date:
            <input
              className="InputResa"
              name="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <div className="SubmitResa">
            <button className="SubmitResa" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default CarReservationForm;
