import React, {Component} from 'react';
import {PersistentDrawer, PersistentDrawerHeader, PersistentDrawerContent, ListItem, ListItemText } from 'rmwc';

export default class Drawer extends Component {
  render() {
    return (
      <PersistentDrawer open={this.props.opened}>
        <PersistentDrawerHeader style={{ backgroundColor: '#f6f6f6' }}>
          PersistentDrawerHeader
        </PersistentDrawerHeader>
        <PersistentDrawerContent>
          <ListItem>
            <ListItemText>Cookies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pizza</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Icecream</ListItemText>
          </ListItem>
        </PersistentDrawerContent>
      </PersistentDrawer>
    )
  }
}
