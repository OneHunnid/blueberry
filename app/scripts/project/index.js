import ReactDOM from 'react-dom';
import React from 'react';
import Emitter from 'event-emitter';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './component/Home.js';
import Store from './store/Store';


export default class Project {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render((
      <Router history={hashHistory}>
          <Route path="/" component={Home} store={Store}/>
      </Router>
      ), document.querySelector('.react-container')
    );
  }
}
