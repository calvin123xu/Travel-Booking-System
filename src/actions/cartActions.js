import axios from 'axios'
import { CART_ADD_ITEM , 
  CART_REMOVE_ITEM, 
  CART_SAVE_CHECKOUT_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get (`/api/Packages/${id}`)

    dispatch ({
        type:CART_ADD_ITEM, 
        payload:{
            package: data.id , 
            name: data.name,
            image: data.image,
            Price: data.Price,
            qty
      }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}


export const removeFromCart = (id) => {
    return (dispatch, getState) => {
      dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
      });
  
      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    };
  };

  export const saveCheckoutAddress = (data) => {
    return (dispatch) => {
      dispatch({
        type: CART_SAVE_CHECKOUT_ADDRESS,
        payload: data,
      });
  
      localStorage.setItem('checkoutAddress', JSON.stringify(data));
    };
  };

  export const savePaymentMethod = (data) => {
    return (dispatch) => {
      dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
      });
  
      localStorage.setItem('paymentMethod', JSON.stringify(data));
    };
  };
  
  
  