import ReactDOM from 'react-dom';
import React from 'react';
import Emitter from 'event-emitter';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux'

import App from './components/App';
import store from './store/store';


export default class Project {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render((
      <Provider store={store}>
        <App />
      </Provider>
      ), document.querySelector('.react-container')
    );
  }
}
