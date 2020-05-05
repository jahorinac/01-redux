import React from 'react'
import ReactDOM from 'react-dom'
import { createStore }from 'redux';
import { rootReducers } from './reducers/rootReducer'
import AppContainer from './App'
import './style.css'


//Add these imports - Step 1

import { Provider } from 'react-redux'

const store = createStore(rootReducers);

//Wrap existing App in Provider - Step 2

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.querySelector('#root'));