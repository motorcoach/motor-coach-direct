import React, { Component } from 'react';
import logo from '../img/white-logo.svg'
import Context from '../models/context'
import Container from '../models/headerContainer'

class Header extends Component { 
   
    
    render() {       
        let {headerImage} = this.props;      
        return (
            
            <header className="App-header"> 
                <img src={headerImage} className="App-headerImage" />                    
                              
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default Header