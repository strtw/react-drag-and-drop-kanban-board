import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  handleDragStart(e, card, parent) {
    card.previousParent = parent;
    e.dataTransfer.setData("text/plain", JSON.stringify(card));
  }

  render() {
    let card = { id: this.props.id, title: this.props.title };
    //const Card = React.forwardRef((props, ref) => (

    // );
    return (
      <div
        className="card"
        draggable="true"
        onDragStart={(e) => this.handleDragStart(e, card, this.props.parent)}
      >
        {this.props.orientation === "left" ? (
          <span> </span>
        ) : (
          <span
            onClick={(event) =>
              this.props.onClick(event, card, this.props.parent)
            }
            className="leftNav"
          >
            <FontAwesomeIcon size="2x" icon={faCaretLeft} />
          </span>
        )}
        <textarea
          draggable="false"
          ref={this.props.cardField} //this talks with parent to give parent access to ref
          className="card__field"
          placeholder={"Add a new title..."}
          defaultValue={this.props.title ? this.props.title : null}
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
            className="rightNav"
            onClick={(event) =>
              this.props.onClick(event, card, this.props.parent)
            }
          >
            <FontAwesomeIcon size="2x" icon={faCaretRight} />
          </span>
        )}
      </div>
    );
  }
}

export default Card;
