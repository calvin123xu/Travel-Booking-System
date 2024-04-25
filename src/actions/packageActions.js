import axios from 'axios'
import { 
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,

    PACKAGE_DETAILS_REQUEST,
    PACKAGE_DETAILS_SUCCESS,
    PACKAGE_DETAILS_FAIL,

    PACKAGE_DELETE_REQUEST,
    PACKAGE_DELETE_SUCCESS, 
    PACKAGE_DELETE_FAIL,
    
    PACKAGE_CREATE_REQUEST,
    PACKAGE_CREATE_SUCCESS,
    PACKAGE_CREATE_FAIL,
    PACKAGE_CREATE_RESET,
  
 } from '../constants/packageConstants'
 
 export const listPackages = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_LIST_REQUEST });

        // Correctly appending the keyword as a query parameter
        const { data } = await axios.get(`/api/Packages?keyword=${keyword}`);

        dispatch({
            type: PACKAGE_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PACKAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

 export const listPackageDetails =(id) => async (dispatch) => {
    try{
        dispatch({type:PACKAGE_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/Packages/${id}`)
        
        dispatch ({
            type: PACKAGE_DETAILS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: PACKAGE_DETAILS_FAIL,
            payload: error.response  && error.response.data.detail 
                ? error.response.data.detail
                : error.message,
            })
     }
 }

 export const deletePackage = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:PACKAGE_DELETE_REQUEST

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
        
        const{data} = await axios.delete(
            `/api/Packages/delete/${id}`,
            config
        )
            
        
        dispatch({
            type:PACKAGE_DELETE_SUCCESS,
            payload:data

        })

    } catch(error) {
        dispatch({
            type: PACKAGE_DELETE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const createPackages = () => async (dispatch, getState) => {
    try {
        dispatch({
            type:PACKAGE_CREATE_REQUEST

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
            `/api/Packages/create/`,
            {},
            config
        )
            
        
        dispatch({
            type:PACKAGE_CREATE_SUCCESS,
            payload:data,

        })

    } catch(error) {
        dispatch({
            type: PACKAGE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

