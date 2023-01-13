import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import instance from "../../helpers/axios";

import "./Cards.css";

function CardsCompany() {
  const [cards, setCards] = useState([{ id: 1, image: null }]);
  const notify = () => {
    toast.dark(" cars created ! ✅ ");
  };

  const handleAddCard = () => {
    const newCard = { id: cards.length + 1, image: null };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const [cars, setCars] = useState("");

  const handleChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/cars", cars)
      .then((res) => console.warn(res.data, notify()))
      .catch((err) =>
        console.error(err, toast.error("Wrong informations ! ❌"))
      );
  };
  return (
    <div>
      <ToastContainer
        theme="dark"
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      {cards.map((card) => (
        <div className="ContainerFormVehicle" key={card.id}>
          {card.content}
          <form className="LabelVehicle" htmlFor="Card" onSubmit={handleSubmit}>
            <h1>Add a new car</h1>
            Picture:{" "}
            <input
              name="img"
              type="url"
              placeholder="URL..."
              onChange={handleChange}
              required
            />
            Make:{" "}
            <input
              name="make"
              placeholder="Make..."
              type="text"
              onChange={handleChange}
              required
            />
            Model:{" "}
            <input name="model" type="text" onChange={handleChange} required />
            Autonomy:{" "}
            <input
              name="autonomy"
              placeholder="Mileage without spaces..."
              type="text"
              onChange={handleChange}
              required
            />
            City:{" "}
            <input
              name="city"
              placeholder="City..."
              type="text"
              onChange={handleChange}
              required
            />
            Miles:{" "}
            <input name="miles" type="text" onChange={handleChange} required />
            Year:{" "}
            <input name="year" type="text" onChange={handleChange} required />
            Seats:{" "}
            <input name="seats" type="text" onChange={handleChange} required />
            <br />
            Available:{" "}
            <fieldset>
              <input
                name="available"
                type="radio"
                value="0"
                onChange={handleChange}
              />
              <label htmlFor="type">Available</label>
              <input
                name="available"
                type="radio"
                value="1"
                onChange={handleChange}
              />
              <label htmlFor="type">Unavailable</label>
            </fieldset>
            <fieldset>
              <input
                type="radio"
                id="casual"
                name="type"
                placeholder="type"
                value="casual"
                onChange={handleChange}
              />
              <label htmlFor="type">Casual</label>
              <input
                type="radio"
                id="confort"
                name="type"
                placeholder="type"
                value="confort"
                onChange={handleChange}
              />
              <label htmlFor="administrateur"> Comfort</label>
            </fieldset>
          </form>
          <div className="ButtonForm">
            <button
              type="submit"
              className="SubmitButton"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
            <button
              type="button"
              className="DeleteButton"
              onClick={() => handleDeleteCard(card.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="ButtonAdd">
        <button type="button" className="AddNewVehicle" onClick={handleAddCard}>
          Add New Vehicle
        </button>
      </div>
    </div>
  );
}

export default CardsCompany;
