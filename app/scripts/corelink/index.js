import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
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
          <Route path="/" component={App} />
        </Router>
      </Provider>
    ),document.querySelector('.root')
    );
  }
}
