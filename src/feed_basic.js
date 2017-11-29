import React, {Component} from 'react'
import {Button, Elevation} from 'rmwc'

class FeedItem extends Component {
  state = {height: 4}

  render() {
    return (
      <Elevation
        z={this.state.height}
        transition
        onMouseOver={() => this.setState( {height: 10} )}
        onMouseOut={() => this.setState( {height:4} ) }
        >
        <h1>I'm a feed item</h1>
        <p>Lots of fun stuff here</p>
        <div className="button_list">
          <Button raised>Primary Button</Button>
          <Button raised theme={['secondary-bg', 'text-primary-on-secondary']}>Secondary</Button>
        </div>
      </Elevation>
    )
  }
}

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
      </div>
    )
  }
}

export default Feed
