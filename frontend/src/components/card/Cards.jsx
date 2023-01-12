import React, { useState } from "react";
import "./Cards.css";
import ImageCard from '@components/ImageCard';
import instance  from '../../helpers/axios';

function Card() {
  const [cards, setCards] = useState([{ id: 1, image: null }]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditingCard, setCurrentEditingCard] = useState(null);

    
    const handleAddCard = () => {
        const newCard = { id: cards.length + 1, image:null };
        setCards([...cards, newCard]);
    };
    
    const handleDeleteCard = id => {
        setCards(cards.filter(card => card.id !== id));
    };
    
    const handleSaveCard = (id) => {
        const newCards = cards.map(card => {
            if (card.id === id) {
                return { id };
            }
            return card;
        });
        setCards(newCards);
    };
    
    const [cars, setCars] = useState("");
    const handleChangeSubmit = (event) => {
    const { name, value } = e.target;
    setCars({ ...cars, [name]: value });
        console.log(event);
    const handleSubmit = (event) => {
        event.preventDefault();
        instance
        .post("/cars")
        .then((res) => console.warn(res.data))
        .catch((err) => console.error(err));
        };
    }
        
    return (
        <div>
        {cards.map(card => (
          <div className='ContainerFormVehicle' key={card.id}>
              <ImageCard/>
            {card.content}
                <form className="LabelVehicle" htmlFor="Card">
                Make: <input name='make' type="text" onSubmit={handleChangeSubmit}  required/>
                Model: <input name='model' type="text" onSubmit={handleChangeSubmit} required/>
                Autonomy: <input name='autonomy' type="text" onSubmit={handleChangeSubmit} required/>
                City: <input name='city' type="text" onSubmit={handleChangeSubmit} required/>
                Miles: <input name='miles' type="text" onSubmit={handleChangeSubmit} required/>
                Year: <input name='year' type="text" onSubmit={handleChangeSubmit} required/>
                Seats: <input name='seats' type="text" onSubmit={handleChangeSubmit} required/>
                </form>
                <button className='DeleteButton' onClick={() => handleDeleteCard(card.id)}>Delete</button>
                <button type='submit' className='SubmitButton'>Submit</button>
          </div>
        ))}
  };

  export default Card;


