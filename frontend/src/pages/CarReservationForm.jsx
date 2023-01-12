import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import {
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
          toast.dark(" Message Sent ! ✅ ");
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
      <ToastContainer
        theme="dark"
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <div className="ResaCards">
        <div className="CarDescription">
          <h1> Car Description </h1>
          <img src={cars.img} alt="car on the road" />
          <p>
            <FontAwesomeIcon
              className="fab fa-react"
              style={{
                color: "#F58A07",
                marginInline: "1rem",
                paddingBlock: "1rem",
              }}
              icon={faCar}
            />

            <FontAwesomeIcon
              className="fab fa-react"
              style={{
                color: "#F58A07",
                marginInline: "1rem",
                paddingBlock: "1rem",
              }}
              icon={faLocationArrow}
            />
            <FontAwesomeIcon
              className="fab fa-react"
              style={{
                color: "#F58A07",
                marginInline: "1rem",
                paddingBlock: "1rem",
              }}
              icon={faUsers}
            />
          </p>
          <p>
            {" "}
            {cars.make} {cars.model}, {cars.year}
          </p>
          <p>Autonomy: {cars.autonomy}</p>
          <p>
            Type: {cars.type}, {cars.seats} seats
          </p>
          <p>Pick-up: {cars.city}</p>
        </div>

        <form className="CarDescription" ref={form} onSubmit={sendEmail}>
          <h2> Ready ? </h2>
          <h2> Please, fill up the form to book it !</h2>
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
          <button id="submitResa" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CarReservationForm;
