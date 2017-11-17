import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './shared/Nav';
import BottomNav from './shared/BottomNav';
import Home from './Home';
import Trending from './Trending';

export default () => (
  <BrowserRouter>
    <div>
      <Nav />
        <Route exact path="/" component={ Home } />
        <Route path="/trending" component={ Trending } />
      <BottomNav />
    </div>
  </BrowserRouter>
);
