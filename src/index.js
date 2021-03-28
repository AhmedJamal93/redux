import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blaze from './Blaze';
// import ReadingList from './ReadingList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers';


//Store -> globalized state
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
  <Blaze />
</Provider>, document.getElementById('root'));

