import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './containers/Home'
import Page from './containers/Page'
import MainLayout from './containers/MainLayout'

import store from './store/store'

const history = syncHistoryWithStore(hashHistory, store)

export default class Corelink {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render((
      <Provider store={store}>
        <Router history={history}>
          <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/page" component={Page} />
          </Route>
        </Router>
      </Provider>
    ),document.querySelector('.root')
    );
  }
}
