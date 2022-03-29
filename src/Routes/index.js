import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ App } />
      </Switch>
    );
  }
}
