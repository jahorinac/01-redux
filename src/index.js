import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware }from 'redux';
import thunk from "redux-thunk";
import { rootReducers } from './reducers/rootReducer'
import AppContainer from './App'
import './style.css'

import { Provider } from 'react-redux'

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.querySelector('#root'));