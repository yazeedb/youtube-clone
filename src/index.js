import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './app/routes';

render(
    Routes,
    document.getElementById('root')
);
