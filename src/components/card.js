import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="leftNav">{"<"}</span>
        {this.props.title}
        <span className="rightNav">{">"}</span>
      </div>
    );
  }
}

export default Card;
