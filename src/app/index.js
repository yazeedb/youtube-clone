import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';
import './global.scss';

const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('root')
);
