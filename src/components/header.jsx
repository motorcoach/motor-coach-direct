import React, { Component } from 'react';

class Header extends Component {         
    render() {    
        let {headerImage, logo} = this.props;   
          
        return (            
            <div>                
                <header className="App-header">   
                    <img src={headerImage} className="App-headerImage" alt="" />                                                                                                                                           
                    <img src={logo} className="App-logo-hide" alt="motorcoach-direct" />
                </header>
            </div>
        );
    }
}
export default Header