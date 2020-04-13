import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        {this.props.orientation === "left" ? (
          <></>
        ) : (
          <span className="leftNav">{"<"}</span>
        )}
        {this.props.title}
        {this.props.orientation === "right" ? (
          <></>
        ) : (
          <span className="rightNav">{">"}</span>
        )}
      </div>
    );
  }
}

export default Card;
