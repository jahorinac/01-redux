import {fetchDataSuccess, fetchDataError} from "./formActions";

export default function fetchData(){

    return dispatch => {
        fetch('https://raw.githubusercontent.com/jahorinac/01-redux/04/fetch-data/src/data/data.json')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchDataSuccess(data[0]))
            })
            .catch(err => dispatch(fetchDataError(err)))
    }
}
