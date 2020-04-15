import React, { Component } from "react";
import Card from "./card";

class Column extends Component {
  constructor(props) {
    super(props);
    this.cardField = React.createRef();
  }

  handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  capitalizeFirstLetter(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }

  render() {
    return (
      <div
        className="column drag-and-drop"
        onDrop={(e) => this.props.onHandleDrop(e, this.props.name)}
        onDragOver={(e) => this.handleDragOver(e)}
        // onDragEnter={e => this.handleDragEnter(e)}
        // onDragLeave={e => this.handleDragLeave(e)}
      >
        <h4 className={[this.props.cardHeader, "column__header"].join(" ")}>
          {this.capitalizeFirstLetter(this.props.name)}
        </h4>
        {this.props.cards.map((card, index, arr) => {
          return (
            <Card
              parent={this.props.name}
              onClick={this.props.onNavClick}
              onCardBlur={this.props.onCardBlur}
              orientation={this.props.orientation}
              id={card.id}
              key={card.id}
              title={card.title}
              cardField={
                arr.length - 1 === index
                  ? (textArea) => (this.cardField = textArea)
                  : null
              } //set ref to child text area, pass as prop
            />
          );
        })}
        <button
          className={"column__add-card"}
          onClick={() => {
            this.props.onClick();
            setTimeout(() => {
              this.cardField.focus();
            }, 0);
          }}
        >
          Add a card +
        </button>
      </div>
    );
  }
}

export default Column;
