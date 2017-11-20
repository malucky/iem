import React, { Component } from 'react';
import classnames from 'classnames';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
  }

  toggleState(event) {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const isFlipped = this.state.isFlipped;
    const show = this.props.data;
    return (
      <figure className="card-container" onClick={this.toggleState.bind(this)}>
        <div className={classnames('card', { isFlipped })}>
          <div className="side">
            <img className="card-image" src={show.image} alt={`${show.name}`} />
          </div>
          <div className="side back">
            <h3 className="card-title">{`${show.name} - ${show.chineseName}`}</h3>
            <p className="card-time">Time: {`${show.time} - ${show.chineseTime}`}</p>
            <p className="card-location">Location: {`${show.location} - ${show.chineseLocation}`}</p>
          </div>
        </div>
      </figure>
    );
  }
}

export default Card;
