import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    let card = { id: this.props.id, title: this.props.title };
    return (
      <div className="card">
        {this.props.orientation === "left" ? (
          <span> </span>
        ) : (
          <span
            onClick={(event) =>
              this.props.onClick(event, card, this.props.parent)
            }
            className="leftNav"
          >
            {"<"}
          </span>
        )}
        <textarea
          className="card__field"
          placeholder={this.props.title}
          value={this.props.value}
          onKeyUp={this.handleKeyDown}
          onBlur={(event) => {
            this.props.onCardBlur(event, card, this.props.parent);
          }}
        />
        {this.props.orientation === "right" ? (
          <span> </span>
        ) : (
          <span
            onClick={(event) =>
              this.props.onClick(event, card, this.props.parent)
            }
            className="rightNav"
          >
            {">"}
          </span>
        )}
      </div>
    );
  }
}

export default Card;
