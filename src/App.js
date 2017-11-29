import React, { Component } from 'react'
import Navbar from './navbar'
import Drawer from './drawer'
import Login from './login'
import Feed from './feed_basic'

class App extends Component {
  state = { drawer: false, login: false }

  drawerToggle = () => { this.setState( { ...this.state, drawer: !this.state.drawer } ) }
  loginToggle = () => { this.setState( { ...this.state, login: !this.state.login } ) }
    
  render() {
    return (
      <div className="app">
        <Login opened={this.state.login} toggle={this.loginToggle}/>
        <Drawer opened={this.state.drawer}/>
        <div className="body">
          <Navbar toggle={this.drawerToggle} login={this.loginToggle}/>
          <Feed/>
        </div>
      </div>
    );
  }
}

export default App;
