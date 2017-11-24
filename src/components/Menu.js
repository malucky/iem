import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import burger_menu from '../images/burger_menu.svg';
import './Menu.css';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  toggleExpandedState(event) {
    event.preventDefault();

    this.setState({ expanded: !this.state.expanded });
  }

  renderMenuList() {
    return (
      <ul className="menu" key="menu">
        {this.props.children.map((elem, i) => (
          <li onClick={this.toggleExpandedState} className="menu-item" key={`menuItem-${i}`}>{elem}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="menu-container">
        <div className="mobileMenu-container">
          <button className="mobileMenu-trigger" href="#" onClick={this.toggleExpandedState}>
            <img src={burger_menu} alt="menu" />
          </button>
          <CSSTransitionGroup
            transitionName="menu"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.expanded && this.renderMenuList()}
          </CSSTransitionGroup>
        </div>
        <div className="desktopMenu-container">
          {this.renderMenuList()}
        </div>
      </div>
    );
  }
}

export default Menu;
