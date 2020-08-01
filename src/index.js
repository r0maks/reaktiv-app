import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import App from './App'
import reducers from './reducers'
import './index.css'
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker'
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register();
