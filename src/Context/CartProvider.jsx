import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:  [],
    totalAmount: 0,
}

const cartReducer = (state, action)=>{
    if(action.type === "ADD_ITEM"){
        const updatedItems = state.items.concat(action.items); 
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === "REMOVED_ITEM"){

    }
    return defaultCartState; 
}

const CartProvider = (props)=>{

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemHandler= (item)=>{
        dispatchCart({type: 'ADD_ITEM', item: item})
    }

    const removeItemHandler= (id)=>{
        dispatchCart({type: 'REMOVE_ITEM', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider; //