import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">IEM Showplace</h1>
      <Menu>
        <Link id="home" to="/">Home</Link>
        <Link id="terms" to="/terms">Terms</Link>
        <Link id="contact" to="/contact">Contact</Link>
      </Menu>
    </header>
  );
};

export default Header;
