import React, { useState, useRef } from "react";

function ImageCard(e) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <button className="AddPicture" onClick={handleClick}>
        Upload picture
      </button>
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <img src={image} style={{ maxWidth: "400px", maxHeight: "300px" }} />
    </div>
  );
}

export default ImageCard;
