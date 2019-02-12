import React, { Component } from 'react'
import Benefits from '../components/benefits'
import Header from '../components/header'
import fleetwood_paceArrow from '../img/fleetwood_pace-arrow.png'

class Home extends Component {
  state = {
    headerImage: fleetwood_paceArrow
  }

  render() {
    return (
      <div>
        <Header />
        <Benefits />
      </div>
    );
  }
}
  
  export default Home;