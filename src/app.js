import React from 'react';
import { render } from 'react-dom';
import Router from './router';

let app = document.getElementById('app-root');
render(
    <Router/>
  , app
);
