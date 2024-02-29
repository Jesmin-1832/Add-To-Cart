import { ADD_CART } from '../Action'
import { DELETE_CART } from '../Action'

export let addtocart = () => {
    return {
        type: ADD_CART,
    }
}

export let deletecart = () => {
    return {
        type: DELETE_CART,
    }
}