
export const logIn = form => {
    return {
    type: 'LOG_IN',
        form: form

}};

export const logOut = (form) => ({
    type: 'LOG_OUT',
    form: form
});

export const fetchDataSuccess = (form) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        form: form
    }
};

export const fetchDataError = (err) => ({
    type: 'FETCH_DATA_ERROR',
    payload: err
});
