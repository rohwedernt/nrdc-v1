import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./menuItem.css";

class MenuItem extends Component {
  render() {
    return (
        <li>
          <NavLink 
            to={this.props.destination} 
            className={this.props.class}
            activeClassName="selected"
          >{this.props.text}</NavLink>
        </li>
    );
  }
}

MenuItem.defaultProps = {
  class: 'custom-link'
};

export default MenuItem;
