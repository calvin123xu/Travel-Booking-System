
import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { packageListReducer, 
         packageDetailsReducer, 
         packageDeleteReducer,
         packageCreateReducer 
} from './reducers/packageReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, 
         userRegisterReducer, 
         userDetailsReducer, 
         userUpdateProfileReducer, 
         userListReducer,
         userDeleteReducer,
         userUpdateReducer,    
} from './reducers/userReducers'
import { flightListReducer } from './reducers/flightReducers'
import { hotelListReducer } from './reducers/hotelReducers'
import { activityListReducer } from './reducers/activityReducers'
import { bookingCreateReducer, bookingDetailsReducer , bookingPayReducer, bookingListMyReducer } from './reducers/bookingReducers'

const reducer = combineReducers({
    packageList:  packageListReducer,
    packageDetails:  packageDetailsReducer,
    packageDelete: packageDeleteReducer,
    packageCreate: packageCreateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    flightList: flightListReducer,
    hotelList: hotelListReducer,
    activityList: activityListReducer,
    bookingCreate: bookingCreateReducer,
    bookingDetails: bookingDetailsReducer,
    bookingPay: bookingPayReducer,
    bookingListMy: bookingListMyReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
   JSON.parse(localStorage.getItem('cartItems'))  : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
   JSON.parse(localStorage.getItem('userInfo'))  : null

const checkoutAddressFromStorage = localStorage.getItem('checkoutAddress') ? 
   JSON.parse(localStorage.getItem('checkoutAddress'))  : {}


const initialState = { 
    
    cart: {
        cartItems: cartItemsFromStorage, 
        checkoutAddress:  checkoutAddressFromStorage
    },
    userLogin: {userInfo: userInfoFromStorage} 
}
  
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store 