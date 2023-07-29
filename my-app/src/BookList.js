import Book from "./Book"; //whatever we write in book it is rendered here imported from Book.js
//whatever written in booklist renders in index.js
import React from "react";//importing react libraries or dependecies 
//Array of objects
import books from "./books.json";
const BookList = () => {
  return (
    <div>
      {books.map((ele) => {
        //map function
        return (
          <Book
            image={ele.image} //accessing props
            title={ele.title}
            publisher={ele.publisher}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default BookList;
