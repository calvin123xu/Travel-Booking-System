import { CART_ADD_ITEM , 
         CART_REMOVE_ITEM, 
         CART_SAVE_CHECKOUT_ADDRESS,
         CART_SAVE_PAYMENT_METHOD,
         CART_CLEAR_ITEMS,
  } from '../constants/cartConstants'




export const cartReducer = (state={cartItems:[], checkoutAddress:{}}, action) => {
    switch(action.type){
        case CART_ADD_ITEM: 
          const item = action.payload
          const existItem = state.cartItems.find (x=> x.package === item.package)

          if (existItem) {
              return{
                ...state,
                cartItems: state.cartItems.map(x => 
                    x.package === existItem.package ? item : x)
              }
            

          }else{
              return{
                ...state,
                cartItems: [...state.cartItems,item]
              }
          }
          
        case CART_REMOVE_ITEM:
            return {
              ...state,
              cartItems: state.cartItems.filter(x => x.package !== action.payload)
            
          
        }
        case CART_SAVE_CHECKOUT_ADDRESS: 
        return{
          ...state,
          checkoutAddress: action.payload

        }   
        
        case CART_SAVE_PAYMENT_METHOD:
          return{
            ...state,
            paymentMethod: action.payload
          }
        
        case CART_CLEAR_ITEMS:
          return{
            ...state,
            cartItems: [],
          }

        default:
            return state
    }
}