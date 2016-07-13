import ReactDOM from 'react-dom';
import React from 'react';
import Emitter from 'event-emitter';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux'

import App from './components/App';
import store from './store/store';


export default class ToDo {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render((
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App} />
        </Router>
      </Provider>
      ), document.querySelector('.react-container')
    );
  }
}
