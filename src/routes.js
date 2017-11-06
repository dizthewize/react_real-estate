import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './realestate/app';
import NotFound from './realestate/components/notfound';

export default (
  <Switch>
    <Route path='/' component={App} />
    <Route path='*' component={NotFound} />
  </Switch>

);
