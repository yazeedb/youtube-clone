import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './global.scss';
import Routes from './routes';
import theme from './theme';

const App = () => (
  <MuiThemeProvider muiTheme={ theme }>
    <Routes />
  </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('root')
);
