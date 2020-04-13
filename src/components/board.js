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
      order: ["Pending", "In progress", "Completed", "Tested"],
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
          onClick={() => this.onClick(this.state.order[0])}
          cardHeader={"purple"}
          name={this.state.order[0]}
        ></Column>
        <Column
          cards={this.state["in progress"]}
          onClick={() => this.onClick(this.state.order[1])}
          cardHeader={"teal"}
          name={this.state.order[1]}
        ></Column>
        <Column
          cards={this.state.completed}
          onClick={() => this.onClick(this.state.order[2])}
          cardHeader={"darkgreen"}
          name={this.state.order[2]}
        ></Column>
        <Column
          cards={this.state.tested}
          onClick={() => this.onClick(this.state.order[3])}
          cardHeader={"orange"}
          name={this.state.order[3]}
          orientation={"right"}
        ></Column>
      </div>
    );
  }
}

export default Board;
