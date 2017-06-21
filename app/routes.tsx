import * as React from 'react';
import { hashHistory, Route, Router } from 'react-router';
import ReleaseTogglesContainer from './release-toggles/release-toggles.container';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={ReleaseTogglesContainer} />
  </Router>
);
