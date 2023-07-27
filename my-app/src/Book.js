import React from "react"; //whatever we write in book renders in booklist
import "./Book.css";
const Book = (props) => {
  // OBJECT DE-STRUCTURING
  const { image, title, publisher, price } = props;
  return (
    <div className="book">
      {console.log(props)}
      <div className="book-image">
        <img src={image} />
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <p className="book-author">By{publisher} </p>
        <p className="book-price">${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Book;
