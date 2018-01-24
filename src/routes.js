import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import App from './components/app';
import NotFound from './components/notfound';

class Layout extends Component {

  componentDidMount() {
    const { fetchHomes } = this.props
    fetchHomes()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

};

export default connect(null, actions)(Layout)