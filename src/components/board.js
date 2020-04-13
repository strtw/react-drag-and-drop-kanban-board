import React, { Component } from "react";
import Column from "./column.js";
import Card from "./card";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: [
        { id: 1, title: "Add new user type" },
        { id: 5, title: "Remove header" },
      ],
      "in progress": [
        { id: 2, title: "Improve component" },
        { id: 6, title: "Change theme" },
      ],
      completed: [
        { id: 3, title: "Set up authentication" },
        { id: 7, title: "Increase font-size" },
      ],
      tested: [
        { id: 4, title: "Bug fix" },
        { id: 8, title: "Create test plan" },
      ],
    };
  }

  onClick = (type) => {
    var result = window.prompt("Add a new card");
    var newCard = {};
    newCard.id = Math.random();
    newCard.title = result;
    console.log(this.state[type]);
    this.setState({ [type]: this.state[type].concat(newCard) });
  };

  render() {
    return (
      <div className="board">
        <Column
          orientation={"left"}
          cards={this.state.pending}
          onClick={() => this.onClick("pending")}
          cardHeader={"purple"}
          name={"Pending"}
        ></Column>
        <Column
          cards={this.state["in progress"]}
          onClick={() => this.onClick("in progress")}
          cardHeader={"teal"}
          name={"In Progress"}
        ></Column>
        <Column
          cards={this.state.completed}
          onClick={() => this.onClick("completed")}
          cardHeader={"darkgreen"}
          name={"Completed"}
        ></Column>
        <Column
          cards={this.state.tested}
          onClick={() => this.onClick("tested")}
          cardHeader={"orange"}
          name={"Tested"}
          orientation={"right"}
        ></Column>
      </div>
    );
  }
}

export default Board;
