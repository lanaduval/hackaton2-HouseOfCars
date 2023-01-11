import React, { useState } from "react";
import "./Cards.css";
import ImageCard from '@components/ImageCard';



function Card() {
    const [cards, setCards] = useState([{ id: 1, image:null }]);
  
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
    // const handleAddImage = id => {
    //     const input = document.createElement("input");
    //     input.type = "file";
    //     input.onchange = (e) => {
    //         const newCards = cards.map(card => {
    //             if(card.id === id) {
    //                 return { id, content: card.content, image: URL.createObjectURL(e.target.files[0])}
    //             }
    //             return card;
    //         });
    //         setCards(newCards);
    //     };
    //     input.click();
    //   };
  
    return (
      <div>
        {cards.map(card => (
            <div className='ContainerFormVehicle' key={card.id}>
              <ImageCard/>
                  {/* <input className='PictureVehicle' 
					type="file"
					name="img"
					id="img"
					onChange={handleAddImage.id}
				/> */}
            {card.content}
                <label className="LabelVehicle">
                Make: <input type="text" />
                Model: <input type="text" />
                Autonomy: <input type="text" />
                City: <input type="text" />
                Miles: <input type="text" />
                Year: <input type="text" />
                Seats: <input type="text" />
                </label>
                <button className='DeleteButton' onClick={() => handleDeleteCard(card.id)}>Delete</button>
          </div>
        ))}
        <div className='AddNewButton'>
        <button className='AddNewButton' onClick={handleAddCard}>Add New Vehicle</button>
        </div>
      </div>
    );
  }
  
  export default Card;
