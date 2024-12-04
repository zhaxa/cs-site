import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <h1>CS2 - Все о твоей любимой игре</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link></li>
          <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>Новости</Link></li>
          <li><Link to="/players" onClick={() => setIsMenuOpen(false)}>Игроки</Link></li>
          <li><Link to="/experience" onClick={() => setIsMenuOpen(false)}>История</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
