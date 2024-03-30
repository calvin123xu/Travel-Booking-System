
import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { packageListReducer, packageDetailsReducer } from './reducers/packageReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { flightListReducer } from './reducers/flightReducers'
import { hotelListReducer } from './reducers/hotelReducers'
import { activityListReducer } from './reducers/activityReducers'

const reducer = combineReducers({
    packageList:  packageListReducer,
    packageDetails:  packageDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    flightList: flightListReducer,
    hotelList: hotelListReducer,
    activityList: activityListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
   JSON.parse(localStorage.getItem('cartItems'))  : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
   JSON.parse(localStorage.getItem('userInfo'))  : null


const initialState = { 
    
    cart: {cartItems: cartItemsFromStorage },
    userLogin: {userInfo: userInfoFromStorage} 
}
  
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store 