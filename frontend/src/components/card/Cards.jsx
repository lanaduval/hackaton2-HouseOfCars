import React, { useState } from "react";
import "./Cards.css";

function Card() {
  const [cards, setCards] = useState([{ id: 1, image: null }]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditingCard, setCurrentEditingCard] = useState(null);

  const handleAddCard = () => {
    const newCard = { id: cards.length + 1, image: null };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleEditCard = id => {
    setIsEditing(true);
    setCurrentEditingCard(cards.find(card => card.id === id));
  };

  const handleSaveCard = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { id };
      }
      return card;
    });
    setCards(newCards);
    setIsEditing(false);
    setCurrentEditingCard(null);
  };

  const handleCancelEditCard = () => {
    setIsEditing(false);
    setCurrentEditingCard(null);
  };

  const handleAddImage = (id) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const newCards = cards.map((card) => {
        if (card.id === id) {
          return {
            id,
            content: card.content,
            image: URL.createObjectURL(e.target.files[0]),
          };
        }
        return card;
      });
      setCards(newCards);
    };
    input.click();
  };

  return (
    <div>
      {cards.map((card) => (
        <div className="ContainerFormVehicle" key={card.id}>
          <input
            className="PictureVehicle"
            type="file"
            name="img"
            id="img"
            onChange={handleAddImage.id}
          />
          <textarea
            className="TextAnnounce"
            type="text"
            placeholder="Write a description"
            rows="10"
            cols="50"
            defaultValue={card.content}
            //   onBlur={e => handleSaveCard(card.id, e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit(card.id, e.target.value);
              }
            }}
          />
          {isEditing && currentEditingCard.id === card.id ? (
            <div>
              <button
                className="ValidateButton"
                onClick={() => handleSubmit(card.id, e.target.value)}
              >
                Validate
              </button>
              <button className="CancelButton" onClick={handleCancelEditCard}>
                Annuler
              </button>
            </div>
          ) : (
            <>
              {card.content}
              {/* <button className='ModifyButton' onClick={() => handleEditCard(card.id)}>Modify</button> */}
              <button
                className="DeleteButton"
                onClick={() => handleDeleteCard(card.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
      <button className="AddNewButton" onClick={handleAddCard}>
        Add New Vehicle
      </button>
    </div>
  );
}

export default Card;
