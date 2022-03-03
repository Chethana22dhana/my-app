import React, { Component } from "react";
import Apifetch from "./Apifetch";
import "./App.css";
import Storage from "./Storage";
import Things from "./Things";
import Todo from "./Todo";

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://api.tvmaze.com/shows")
      .then((res) =>{
        console.log(res);
       return res.json()}
       )
  
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      },[]);
  }
  render() {
    const { items } = this.state;
    localStorage.setItem("user",JSON.stringify({username:'Chethan',password:'123456'}))
    return (
      <div>
        {/* <Todo/> */}
        {/* <Apifetch/> */}
        <h1>Hai Welcome to Subline Text</h1>
        <Things/>
        {/* <Storage/> */}
        {/* <h1> Fetch data from an api in react </h1> */}
        {/* <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>summary</th>
          </tr>{" "}
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img style={{width:100,height:50}} src={item.image.medium}/></td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </table> */}
      </div>
    );
  }
}

