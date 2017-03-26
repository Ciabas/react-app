import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

import Home from './pages/home/home';
import Lorem from './pages/static/lorem';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/lorem' component={Lorem} />
      </Router>
    );
  }
}
