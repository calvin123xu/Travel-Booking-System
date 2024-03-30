import { 
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,

    PACKAGE_DETAILS_REQUEST,
    PACKAGE_DETAILS_SUCCESS,
    PACKAGE_DETAILS_FAIL,
  
 } from '../constants/packageConstants'
export const packageListReducer = (state = { Packages: []}, action) => {
    switch (action.type){
        case PACKAGE_LIST_REQUEST:
            return{ loading: true, Packages: [] }
        case PACKAGE_LIST_SUCCESS:
            return { loading: false, Packages: action.payload }
        case PACKAGE_LIST_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state
    }
}


export const packageDetailsReducer = (state = { Package: {reviews:[]}}, action) => {
    switch (action.type){
        case PACKAGE_DETAILS_REQUEST:
            return{ loading: true, ...state }
        case PACKAGE_DETAILS_SUCCESS:
            return { loading: false, Package: action.payload }
        case PACKAGE_DETAILS_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state
    }
}

