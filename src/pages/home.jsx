import React, { Component } from 'react'
import Benefits from '../components/benefits'
import Header from '../components/header'
import Bar from '../components/bar'
import liberty from '../img/motorcoach-direct/Liberty-Coach.jpg'
import Footer from '../components/footer'
import logo from '../img/logo.png'
class Home extends Component {  

  render() {
    return (
      <div >
        {/* <Bar/> */}
        <Header headerImage={logo} logo={logo} />
        <Benefits />
        <Footer />
      </div>
    );
  }
}
  
export default Home;