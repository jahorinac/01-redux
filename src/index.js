import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App'


//Add these imports - Step 1

import { Provider } from 'react-redux'
import { store } from './redux'


//Wrap existing App in Provider - Step 2

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.querySelector('#root'));