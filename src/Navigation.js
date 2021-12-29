import React, { Component } from "react";
import MenuItem from "./MenuItem.js";

const style = {
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'center'
}

const ulStyle = {
  listStyleType: 'none',
  padding: '0',
}

class Navigation extends Component {
  render() {
    return (
      <div style={style}>
        <ul style={{display: 'flex', listStyleType: 'none', padding: '0', margin: '0'}}>
          <MenuItem 
            destination="/home"
            text="nateRohweder"
            class="title"
          />
          <MenuItem 
            destination="/about" 
            text="about" 
          />
          <MenuItem
            destination="/code"
            text="codeStuff"
          />
          <MenuItem 
            destination="/music" 
            text="musicStuff" 
          />
          <MenuItem 
            destination="/travel" 
            text="travelStuff" 
          />
          <MenuItem
            destination="/craftBeer"
            text="craftBeerStuff"
          />
        </ul>
      </div>
    );
  }
}

export default Navigation;
