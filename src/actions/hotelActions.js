import axios from 'axios'
import { LIST_HOTELS_REQUEST, 
         LIST_HOTELS_SUCCESS, 
         LIST_HOTELS_FAIL 
} from '../constants/hotelConstants'

export const listHotels = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_HOTELS_REQUEST });

       
        const { data } = await axios.get('/api/Hotels/');

        dispatch({
            type: LIST_HOTELS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LIST_HOTELS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};
