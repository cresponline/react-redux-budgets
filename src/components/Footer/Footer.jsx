import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <nav className="footer navbar navbar-fixed-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <Link className="navbar-brand text-center navbar-footer" href="https://github.com/cresponline">Salvador Crespo 2017</Link>
      </div>
    </div>
  </nav>
);

export default Footer;
