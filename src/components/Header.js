import React from 'react';
import logo from '../sl-logo.png';

const Header = () => {
  return (
    <header className="app-header d-flex align-items-center bg-dark-indigo py-1">
      <img src={logo} className="app-logo p-3" alt="logo" />
      <h6 className="text-white m-3">React-Redux People Report</h6>
    </header>
  );
};

export default Header;
