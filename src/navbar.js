import React, {Component} from 'react';
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarMenuIcon, ToolbarTitle, ToolbarIcon} from 'rmwc';

export default class Navbar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection alignStart>
            <ToolbarMenuIcon use="menu" onClick={this.props.toggle}/>
            <ToolbarTitle>RMWC Test Code</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection alignEnd>
            <ToolbarIcon use="account_circle" onClick={this.props.login}/>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    )
  }
}
