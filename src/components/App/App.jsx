import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {

  render () {
    return (
      <div>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  description: PropTypes.string,
  estimatedTime: PropTypes.string,
  category: PropTypes.string,
  subCategory: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.string

}

export default App;
