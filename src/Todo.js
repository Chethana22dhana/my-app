import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    todo: "",
    todolist: [],
  };
  todoChnage = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  TodoSubmit = (e) => {
    e.preventDefault();
    this.setState(({ todo, todolist }) => {
      return {
        todolist: [
          ...todolist,
          { text: todo, id: new Date().valueOf(), isDone: false },
        ],
      };
    });
  };
  render() {
    const { todo, todolist } = this.state;
    return (
      <div>
        <h1>Welcome To Todo App</h1>
        <form onSubmit={this.TodoSubmit}>
          <lable>enter todo items </lable>
          <input
            type="text"
            placeholder="add..."
            value={todo}
            onChange={this.todoChnage}
          ></input>
          <button type="submit">Add To Todo</button>
        </form>
        {todolist.map((item) => {
          return (
            <div>
              <input type="checkbox"></input>
              <span>{item.text}</span>
              <button type="button">delete item</button>
            </div>
          );
        })}
      </div>
    );
  }
}
