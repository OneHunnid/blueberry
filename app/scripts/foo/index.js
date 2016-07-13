import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/store';

export default class Foo {
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
      ),document.querySelector('.react-container')
    );
  }
}
