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
      order: ["pending", "in progress", "completed", "tested"],
    };

    this.onNavClick = this.onNavClick.bind(this);
  }

  onClick = (type) => {
    var result = window.prompt("Add a new card");
    var newCard = {};
    newCard.id = Math.random();
    newCard.title = result;
    console.log(this.state[type]);

    this.setState({ [type]: this.state[type].concat(newCard) });
  };

  onNavClick = (event, card, parentCategory) => {
    var columns = this.state.order;
    for (let i = 0; i < columns.length; i++) {
      //loop through parent columns
      var currentColumn = columns[i];
      let filteredColumn = this.state[currentColumn].filter(
        (item) => item.title !== card.title
      );
      if (currentColumn === parentCategory) {
        //if current column is same as current card's parent
        if (event.target.className === "leftNav") {
          var previous = columns[i - 1]; //find the previous column
          this.setState({ [previous]: this.state[previous].concat(card) }); //update previous column state
          this.setState({ [currentColumn]: filteredColumn }); //remove card from current column state
        } else if (event.target.className === "rightNav") {
          var next = columns[i + 1]; //find the next column
          this.setState({ [next]: this.state[next].concat(card) }); //update next column state
          this.setState({ [currentColumn]: filteredColumn }); //remove card from current column state
        }
      }
    }
  };

  render() {
    return (
      <div className="board">
        <Column
          onNavClick={this.onNavClick}
          orientation={"left"}
          cards={this.state.pending}
          onClick={() => this.onClick(this.state.order[0])}
          cardHeader={"purple"}
          name={this.state.order[0]}
        ></Column>
        <Column
          onNavClick={this.onNavClick}
          cards={this.state["in progress"]}
          onClick={() => this.onClick(this.state.order[1])}
          cardHeader={"teal"}
          name={this.state.order[1]}
        ></Column>
        <Column
          onNavClick={this.onNavClick}
          cards={this.state.completed}
          onClick={() => this.onClick(this.state.order[2])}
          cardHeader={"darkgreen"}
          name={this.state.order[2]}
        ></Column>
        <Column
          onNavClick={this.onNavClick}
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
