import React, { Component } from "react";
import Card from "./card";
class Column extends Component {
  constructor(props) {
    super(props);
  }

  createCard = () => {
    return <Card card={this.props.card} />;
  };

  render() {
    return (
      <>
        <div className="column">
          <h4 className={this.props.cardHeader}>{this.props.name}</h4>
          {this.props.cards.map((card, index) => {
            return (
              <Card
                orientation={this.props.orientation}
                key={card.id}
                title={card.title}
              />
            );
          })}
          <button onClick={this.props.onClick}>Add a card +</button>
        </div>
      </>
    );
  }
}

export default Column;
