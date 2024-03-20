import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { packageListReducer, packageDetailsReducer } from './reducers/packageReducers'

const reducer = combineReducers({
    packageList:  packageListReducer,
    packageDetails:  packageDetailsReducer
})

const initialState = { loading: false}
  
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store 