import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './global.scss';
import rootReducer from './rootReducer';
import Routes from './routes';
import theme from './theme';

const App = () => (
  <Provider store={ createStore(rootReducer, applyMiddleware(thunk)) }>
    <MuiThemeProvider muiTheme={ theme }>
      <Routes />
    </MuiThemeProvider>
  </Provider>
);

render(
    <App />,
    document.getElementById('root')
);
