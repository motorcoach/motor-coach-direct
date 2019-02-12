import React, { Component } from 'react'
import fleetwood_paceArrow from '../img/fleetwood_pace-arrow.png'
import fleetwood_discovery from '../img/fleetwood_discovery.png'
import Context from '../models/context'

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headerImage: fleetwood_paceArrow
    }
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state, updateHeader: () => {this.setState({headerImage: fleetwood_discovery}); console.log(this.state.headerImage)}  }}>{this.props.children}</Context.Provider>
    )
  }
}

export default Container