import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import logo from '../img/logo.png'
import ThankYou from '../components/thankYou'

class Thanks extends Component { 
    
    render() {
        return (
            <div> 
                <Header headerImage={logo}  />     
                <ThankYou/>              
                <Footer />         
            </div>
        );
    }
}

export default Thanks;