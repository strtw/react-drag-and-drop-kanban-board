import React, { Component } from "react";
import Card from "./card";
class Column extends Component {
  constructor(props) {
    super(props);
  }

  capitalizeFirstLetter(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }

  render() {
    return (
      <>
        <div className="column">
          <h4 className={[this.props.cardHeader, "column__header"].join(" ")}>
            {this.capitalizeFirstLetter(this.props.name)}
          </h4>
          {this.props.cards.map((card, index) => {
            return (
              <Card
                parent={this.props.name}
                onClick={this.props.onNavClick}
                orientation={this.props.orientation}
                id={card.id}
                key={card.id}
                title={card.title}
              />
            );
          })}
          <button className={"column__add-card"} onClick={this.props.onClick}>
            Add a card +
          </button>
        </div>
      </>
    );
  }
}

export default Column;
