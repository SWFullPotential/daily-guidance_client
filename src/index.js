import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore} from 'redux';
import RootReducer from './reducers/RootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
