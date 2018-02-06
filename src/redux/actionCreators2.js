
import getTemp from '../compoments/getTemp';

export function startFetchData() {
    return {type: 'START_FETCH'};
}

export function fetchSuccess(cityName, temp){
    return {
         type: 'FETCH_SUCCESS',
         cityName,
         temp
    };
}

export function fetchError(){
    return { type: 'FETCH_ERROR' }
}

export function fetchDataThunk(){
    return dispatch => {
        dispatch(startFetchData());
        getTemp()
        .then(temp => dispatch(fetchSuccess()))
        .catch(err => dispatch(fetchError()));

    }
}