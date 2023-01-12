import React, { useState, useRef } from "react";

const ImageCard = e => {
  const [image, setImage] = useState(null);

  const handleImageChange = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  

  return (
    <div>
     <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }}  />
     <button  className="AddPicture"  onClick={handleClick}>Add picture</button>
      <img src={image} style={{ maxWidth: "400px", maxHeight: "300px" }} />
    </div>
  );
};

export default ImageCard;
