import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './shared/nav';
import BottomNav from './shared/bottom-nav';
import Home from './home';

export default () => (
  <BrowserRouter>
    <div>
      <Nav />
        <Route exact path="/" component={ Home } />
      <BottomNav />
    </div>
  </BrowserRouter>
);