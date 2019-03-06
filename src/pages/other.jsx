import React, { Component } from 'react';
import OtherComponent from '../components/other';
import Header from '../components/header'
import Bar from '../components/bar'

class Other extends Component {
    render() {
        return (
            <div>                
                <Bar />
                <Header />
                <OtherComponent />  
            </div>
        )
    }
}
  
export default Other;