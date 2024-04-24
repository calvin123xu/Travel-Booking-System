import axios from 'axios'
import { 
    BOOKING_CREATE_REQUEST,
    BOOKING_CREATE_SUCCESS,
    BOOKING_CREATE_FAIL,

    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,

    BOOKING_PAY_REQUEST,
    BOOKING_PAY_SUCCESS,
    BOOKING_PAY_FAIL,
    BOOKING_PAY_RESET,

    BOOKING_LIST_MY_REQUEST,
    BOOKING_LIST_MY_SUCCESS,
    BOOKING_LIST_MY_FAIL,
    BOOKING_LIST_MY_RESET,
} from '../constants/bookingConstants'

import { CART_CLEAR_ITEMS } from '../constants/cartConstants'

export const createBooking = (booking) => async (dispatch, getState) => {
    try {
        dispatch({
            type:BOOKING_CREATE_REQUEST

        })

        const {
            userLogin : { userInfo },

        } = getState ()

        const config = {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const{data} = await axios.post(
            `/api/bookings/add/`,
            booking,
            config
        )
            
        
        dispatch({
            type:BOOKING_CREATE_SUCCESS,
            payload : data

        })

        dispatch({
            type:CART_CLEAR_ITEMS,
            payload : data

        })
        localStorage.removeItem('cartItems')
             
                

    } catch(error) {
        dispatch({
            type: BOOKING_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
            })
    }
}

export const getBookingDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:BOOKING_DETAILS_REQUEST

        })

        const {
            userLogin : { userInfo },

        } = getState ()

        const config = {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const{data} = await axios.get(
            `/api/bookings/${id}/`,
            config
        )
            
        
        dispatch({
            type:BOOKING_DETAILS_SUCCESS,
            payload : data

        })

    } catch(error) {
        dispatch({
            type: BOOKING_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
            })
    }
}



export const payBooking = (id, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({
            type:BOOKING_PAY_REQUEST

        })

        const {
            userLogin : { userInfo },

        } = getState ()

        const config = {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const{data} = await axios.put(
            `/api/bookings/${id}/pay/`,
            paymentResult,
            config
        )
            
        
        dispatch({
            type:BOOKING_PAY_SUCCESS,
            payload : data

        })

    } catch(error) {
        dispatch({
            type: BOOKING_PAY_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
            })
    }
}

export const listMyBookingDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:BOOKING_LIST_MY_REQUEST

        })

        const {
            userLogin : { userInfo },

        } = getState ()

        const config = {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const{data} = await axios.get(
            `/api/bookings/mybookings`,
            config
        )
            
        
        dispatch({
            type:BOOKING_LIST_MY_SUCCESS,
            payload : data

        })

    } catch(error) {
        dispatch({
            type: BOOKING_LIST_MY_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
            })
    }
}
