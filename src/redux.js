import { combineReducers, createStore } from 'redux'


// actions.js

export const activateGeod = form => ({
    type: 'ACTIVATE_GEOD',
    form
});

console.log(activateGeod)

export const closeGeod = () => ({
    type: 'CLOSE_GEOD'
});


// reducers.js

export const form = (state = {}, action) =>{

    console.log('reducers')

    switch (action.type) {

        case 'ACTIVATE_GEOD':
            return action.form

        case 'CLOSE_GEOD':
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
