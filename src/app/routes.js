import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';

export default (
  <BrowserRouter>
    <Route exact path="/" component={ Home } />
  </BrowserRouter>
);