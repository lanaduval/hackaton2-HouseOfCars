import React, { useState } from 'react';

function Carousel({ models }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevClick = () => {
    const nextIndex = currentIndex === 0 ? models.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };
  
  const handleNextClick = () => {
    const nextIndex = currentIndex === models.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <button onClick={handlePrevClick}>Prev</button>
      <img src={models[currentIndex].imageUrl} alt={models[currentIndex].name} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;