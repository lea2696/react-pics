import React from "react";
import "./ImageList.css";
import ImageCards from "./ImageCards.js";

const ImageList = props => {
  const imagenes = props.images.map(image => (
    <ImageCards key={image.id} image={image} />
  ));
  return <div className="image-list">{imagenes}</div>;
};
export default ImageList;
