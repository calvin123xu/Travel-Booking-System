
import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { packageListReducer, packageDetailsReducer } from './reducers/packageReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    packageList:  packageListReducer,
    packageDetails:  packageDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];


const initialState = { 
    loading: false,
    cart: {cartItems: cartItemsFromStorage }
}
  
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store 