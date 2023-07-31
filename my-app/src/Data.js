import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [nData, setnData] = useState(datas);

  /*const handleClick=()=>{
    setnData([])
  }*/

  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </div>
  );
};

export default Data;
