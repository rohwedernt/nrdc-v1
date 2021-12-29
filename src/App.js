import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from './Navigation.js';
import Main from './Main.js';

import './App.css';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Main />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
