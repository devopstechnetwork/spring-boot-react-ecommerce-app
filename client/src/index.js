import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../src/styles/index.css'

import reducers from './reducers';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import log from 'loglevel';

// log.disableAll(true)
// log.setLevel("info")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);