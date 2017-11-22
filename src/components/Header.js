import React from 'react';
import {
  Link
} from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/slide';
import burger_menu from '../images/burger_menu.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">IEM Showplace</h1>
      <Menu customBurgerIcon={ <img alt="menu" src={burger_menu} /> }>
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="terms" className="menu-item" to="/terms">Terms</Link>
        <Link id="contact" className="menu-item" to="/contact">Contact</Link>
      </Menu>
    </header>
  );
};

export default Header;
