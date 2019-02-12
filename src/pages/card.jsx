import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from '../components/options';
import Header from '../components/header'  

class Card extends Component {

  render() {
    return (
      <div>
        <Header />
        <Options />
      </div>
    );
  }
} 

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Card;