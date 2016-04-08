import ReactDOM from 'react-dom';
import React from 'react';
import Emitter from 'event-emitter';

import Home from './component/Home.js';
import Model from './store';


export default class Project {
  constructor(prop1, prop2) {
    this.ee = Emitter({});
    this.setEvents();
    this.render();
  }
  render() {
    ReactDOM.render(
      <Home Model={Model} ee={this.ee} />,
      document.querySelector('.react-container')
    );
  }
  setEvents() {
    this.ee.on('updateNum', () => { // this.ee is a Dispatcher
        Model.updateNum();
        this.render();
    })
  }
}
