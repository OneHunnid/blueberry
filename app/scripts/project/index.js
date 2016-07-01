import ReactDOM from 'react-dom';
import React from 'react';
import Emitter from 'event-emitter';

import Home from './component/Home.js';
import Store from './store';


export default class Project {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render(
      <Home store={Store} />,
      document.querySelector('.react-container')
    );
  }
}
