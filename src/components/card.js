import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
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
        {this.props.title}
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
