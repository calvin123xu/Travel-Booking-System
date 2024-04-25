
import { LIST_HOTELS_REQUEST, 
         LIST_HOTELS_SUCCESS, 
         LIST_HOTELS_FAIL 
        
        } from '../constants/hotelConstants'

export const hotelListReducer = (state = { hotels: [] }, action) => {
    switch (action.type) {
        case LIST_HOTELS_REQUEST:
            return { loading: true, hotels: [] };
        case LIST_HOTELS_SUCCESS:
            return { loading: false, hotels: action.payload };
        case LIST_HOTELS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
