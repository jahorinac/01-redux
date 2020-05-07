import { combineReducers } from "redux";

const rootReducer = (state = {}, action) =>{

    switch (action.type) {

        case 'LOG_IN':
            return {
                ...state,
                message: 'WELCOME!',
                login: true
            };

        case 'LOG_OUT':
            return {
                ...state,
                message : 'Let`s login',
                login : false
            };

        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                ...action.form
            };
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                ...action.payload.error
            };

        default:
            return state;
    }
};

export const rootReducers = combineReducers({
    form : rootReducer
});