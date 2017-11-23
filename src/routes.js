import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Trending from './components/Trending';

export default () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={ Home } />
      <Route exact path="/trending" component={ Trending } />
    </App>
  </BrowserRouter>
);
