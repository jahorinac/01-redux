import { combineReducers, createStore } from 'redux'


// actions.js

export const logIn = form => ({
    type: 'LOG_IN',
    form
});

console.log(logIn)

export const logOut = () => ({
    type: 'LOG_OUT'
});


// reducers.js

export const form = (state = {}, action) =>{

    console.log('reducers')

    switch (action.type) {

        case 'LOG_IN':
            return action.form

        case 'LOG_OUT':
            return {};

        default:
            return state;
    }
};

export const reducers = combineReducers({
    form
});


//  store.js

export function configureStore(initialState = {}) {
    console.log('store')
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();
