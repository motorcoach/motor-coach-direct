import React, { Component } from 'react';
import OtherComponent from '../components/other';
import Header from '../components/header'
class Other extends Component {
    render() {
        return (
            <div>
                <Header />
                <OtherComponent />
            </div>
        )
    }
}
  
export default Other;