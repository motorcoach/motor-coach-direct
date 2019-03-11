import React, { Component } from 'react'
import Stepper from '../components/stepper'
import Header from '../components/header'
import Logo from '../img/white-logo.svg'
import Bar from '../components/bar'

class Start extends Component { 
  state = {
    headerImage: Logo,
    scene:''
  }
  handleHeader = (headerImage) => {
    this.setState({headerImage: headerImage})
  }
  
  render() {
    return (
      <div> 
        <Bar/>
        <Header headerImage={this.state.headerImage} logo={Logo} />       
        <Stepper handlerToUpdate = {this.handleHeader} />           
      </div>
    );
  }
}     
  
export default Start;