import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

const app = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    {routes}
  </BrowserRouter>, app);
