import React, { Component } from 'react'
import './App.css'
import Home from './pages/home'
import Card from './pages/card'
import Other from './pages/other'
import Start from './pages/start'
import Header from './components/header'
import { BrowserRouter as Router, Route } from "react-router-dom"
import fleetwood_paceArrow from './img/fleetwood_pace-arrow.png'
import fleetwood_discovery from './img/fleetwood_discovery.png'
import logo from './img/white-logo.svg'

class App extends Component {
  constructor(props) {
    super(props);
    
    
  }
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">                
          <Route exact path="/" component={Home} />
          <Route path="/card" component={Card} />
          <Route path="/other" component={Other} />
          <Route path="/start" component={Start} />          
        </div>
      </Router>
    );
  }
}

export default App
