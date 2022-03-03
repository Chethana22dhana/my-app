import React, { useState } from "react";
import axios from "axios";

function Things() {
  const [items, setItems] = useState([]);

  function fetchRandomData() {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      console.log(response);
      setItems(response.data);
    });
  }
  return (
    <div>
      <button onClick={fetchRandomData}>Fetch Random Data</button>
      <div>
        {items.slice(0, 2).map((item) => (
          <div>
            <h1>{item.id}</h1> <span>{item.name}</span>
            <img src={item.image.medium}/>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Things;
