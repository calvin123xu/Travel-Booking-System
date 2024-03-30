import axios from 'axios'
import { LIST_FLIGHTS_REQUEST, 
         LIST_FLIGHTS_SUCCESS, 
         LIST_FLIGHTS_FAIL 
} from '../constants/flightConstants'


export const listFlights = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_FLIGHTS_REQUEST });

        const { data } = await axios.get('/api/Flights/')

        dispatch({
            type: LIST_FLIGHTS_SUCCESS,
            payload: data, 
        });
    } catch (error) {
        dispatch({
            type: LIST_FLIGHTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
