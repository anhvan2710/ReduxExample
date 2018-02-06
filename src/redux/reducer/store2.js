import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultSate = {
    cityName: 'Hanoi',
    temp: null,
    isLoading: false,
    error: false
};

const reducer = (state = defaultSate, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return { cityName: null, error: false, temp: null, isLoading: true };
        case 'FETCH_SUCCESS':
            return { cityName: action.cityName, error: false, temp: action.temp, isLoading: false };
        case 'FETCH_ERROR':
            return { cityName: null, error: true, temp: null, isLoading: false };
        default:
            return state;
    }
}

const store2 = createStore(reducer, applyMiddleware(thunk));
export default store2;
