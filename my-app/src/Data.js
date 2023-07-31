import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [nData, setnData] = useState(datas);
  /*const handleUpdate = (itemId) => {
     setnData(nData.map((item) => item.id !== itemId));
   };*/
  const handleUpdate = (itemId) => {
    setnData((nData) =>
      nData.map((item) =>
        item.id === itemId ? { ...item, status: !item.status } : item
      )
    );
  };
  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };

  /*const handleClick=()=>{
    setnData([])
  }*/

  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleUpdate(items.id)}>Update</button>
            <button onClick={() => handleRemove(items.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </div>
  );
};

export default Data;
