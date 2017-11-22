import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './shared/Nav';
import BottomNav from './shared/BottomNav';
import App from './App';
import Home from './Home';
import Trending from './Trending';

export default () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={ Home } />
      <Route exact path="/trending" component={ Trending } />
    </App>
  </BrowserRouter>
);
