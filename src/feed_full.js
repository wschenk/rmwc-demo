import React, {Component} from 'react'
import {Button, Elevation} from 'rmwc'
import Helmet from 'react-helmet'

class FeedItem extends Component {
  state = {height: 4}

  click = () => { this.props.theme( this.props.primary, this.props.secondary ) }

  render() {
    return (
      <Elevation
        z={this.state.height}
        transition
        onMouseOver={() => this.setState( {height: 10} )}
        onMouseOut={() => this.setState( {height:4} ) }
        >
        <h2>Set the theme to: {this.props.primary}, {this.props.secondary}</h2>
        <div className="button_list">
          <Button raised onClick={this.click}>Primary Button</Button>
          <Button raised onClick={this.click} theme={['secondary-bg', 'text-primary-on-secondary']}>Secondary</Button>
        </div>
      </Elevation>
    )
  }
}

class Feed extends Component {
  state = {primary:"#3f51b5",secondary:"#ff4081"}
  setTheme = (primary, secondary) => { this.setState( {primary,secondary} ) }
  render() {
    return (
      <div className="feed">
        <Helmet>
          <style>{":root { --mdc-theme-primary: " + this.state.primary + "; --mdc-theme-secondary: " + this.state.secondary + ";}"}</style>
        </Helmet>
        <FeedItem primary="#3f51b5" secondary="#ff4081" theme={this.setTheme}/>
        <FeedItem primary="#00796b" secondary="#0277bd" theme={this.setTheme}/>
        <FeedItem primary="#6a1b9a" secondary="#e64a19" theme={this.setTheme}/>
      </div>
    )
  }
}

export default Feed
