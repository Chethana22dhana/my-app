import React, { useState, useEffect } from "react";
const Apifetch = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setInfo(data.near_earth_objects);
      })
      .catch((error)=>{
        console.log(error);
       })
  }, []);
const submitbutton=(e)=>{
e.preventDefault();
alert("An invalid api_key was supplied. Get one at https://api.nasa.gov:443")
 }
  return (
    <div>
      <h1>Welcome To Fetch data</h1>
      <form>
        <input type="text" placeholder="Enter Asteroid ID " ></input>
       <button type="button" onClick={submitbutton}>Submit</button>
       <button type="button">Random Asteroid</button>
      {info.map((x) => {
        return (
          <div>
            <h1>ID:{x.id}</h1>
            <h1>name:{x.name}</h1>
            <h1>URL:{x.near_earth_objects}</h1>
          </div>
        );
      })}
      </form>
    </div>
  );
};
export default Apifetch;
