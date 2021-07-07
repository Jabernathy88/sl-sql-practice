
import React from 'react';
import App from './containers/App.js'

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import appReducer from "./reducers/appReducer";

// import key from process.env.SL_API_KEY

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider className="provider bg-blue-grey" store={store}>
    <App />
  </Provider>,
  rootElement
);
