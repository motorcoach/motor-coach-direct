import React, { Component } from 'react'
import Benefits from '../components/benefits'
import Header from '../components/header'
import logo from '../img/white-logo.svg'
import Bar from '../components/bar'
import liberty from '../img/motorcoach-direct/Liberty-Coach.jpg'

class Home extends Component {  

  render() {
    return (
      <div >
        <Bar/>
        <Header headerImage={logo} logo={logo} />
        <Benefits />
      </div>
    );
  }
}
  
export default Home;