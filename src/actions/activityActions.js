import axios from 'axios'
import { LIST_ACTIVITIES_REQUEST, 
         LIST_ACTIVITIES_SUCCESS, 
         LIST_ACTIVITIES_FAIL 
} from '../constants/activityConstants'
export const listActivities = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_ACTIVITIES_REQUEST });
        const { data } = await axios.get('/api/Activities/');
        dispatch({
            type: LIST_ACTIVITIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LIST_ACTIVITIES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};