import { combineReducers } from "redux";

const rootReducer = (state = {}, action) =>{

    switch (action.type) {

        case 'LOG_IN':
            return action.form;

        case 'LOG_OUT':
            return action.form;

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