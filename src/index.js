import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import customTheme from './theme.json';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme(customTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
