import React, { Component } from 'react'
import './App.css'
import Home from './pages/home'
import Card from './pages/card'
import Other from './pages/other'
import Start from './pages/start'
import { HashRouter  as Router, Route } from "react-router-dom"
import $ from 'jquery'
import { MuiThemeProvider } from '@material-ui/core/styles';


import theme from './theme/bee-eater'

class App extends Component {  
  
componentDidMount () {
  $(() => {
    window.basket.require({url: 'lightningPoints/jsdoit.js'})
      .then(function () {
        window.basket.require({url: 'lightningPoints/index.js'});
    })
  })     
}
  render() {
    
    return (
      <MuiThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>        
        <div className="App">      
          <canvas id='c' className="App-lightning" ></canvas>   
          <Route exact path="/" component={Home} />
          <Route path="/card" component={Card} />
          <Route path="/other" component={Other} />
          <Route path='/start' component={Start} />                 
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App
