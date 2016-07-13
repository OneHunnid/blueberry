import { createStore } from 'redux';
import todoApp from './../reducers/index';

let store = createStore(todoApp);

export default store;
