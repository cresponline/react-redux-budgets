import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <nav className="header navbar navbar-toggleable-md navbar-light bg-faded">
    <div className="container">
      <Link className="link navbar-brand navbar-title" to="/">React-Redux Front Challenge</Link>
    </div>
  </nav>
);

export default Header;
