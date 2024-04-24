
import { LIST_FLIGHTS_REQUEST, 
         LIST_FLIGHTS_SUCCESS, 
         LIST_FLIGHTS_FAIL 
    } from '../constants/flightConstants'

export const flightListReducer = (state = { flights: [] }, action) => {
    switch (action.type) {
        case LIST_FLIGHTS_REQUEST:
            return { loading: true, flights: [] };
        case LIST_FLIGHTS_SUCCESS:
            return { loading: false, flights: action.payload };
        case LIST_FLIGHTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
