import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css"; // Import CSS for styling

const initialImages = [
  { src: "https://images.unsplash.com/photo-1572543280484-b721c9f961de", caption: "Image 1" },
  { src: "https://images.unsplash.com/photo-1522915119390-5ea761501207", caption: "Image 2" },
  { src: "https://images.unsplash.com/photo-1506748686214-e0fd4040dd0d", caption: "Image 3" }
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/400/300?random=${randomId}`,
      caption: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>
      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure
            key={index}
            src={image.src}
            caption={image.caption}
            onRemove={() => removeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
