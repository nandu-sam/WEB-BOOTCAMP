/*import React from "react";

const Greet = () => {
  return <button>Hello there</button>;
};

const Components = () => {
  return <div>
    <h1>This is my first component</h1>
    <Greet/>
    </div>;
};

export default Components;*/
import React from 'react';


const Fruits = [
  { title: "Mango", isFruit: true, id: 1 },
  { title: "Litchi", isFruit: true, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Cabbage", isFruit: false, id: 4 },
];
const Components = Fruits.map((Fruits) =>{
return (
  <li key={Fruits.title}>
  {Fruits.id}
  </li>
  });
    <div>
      <ol>
        {Components/}
      </ol>
    </div>;
  );
export default Components;