import React from 'react';
import logo from './logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="aviasales"/>
        </div>
      </div>
    </header>
  );
};

export default Header;