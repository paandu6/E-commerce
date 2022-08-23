import React, { useReducer } from "react"

const CartContext=React.createContext(()=>{
    return(
        {
            items:[],
            totalAmount:0,
            AddToCart:(items)=>{},
            RemoveFromCart:(id)=>{}
        }
    )
})
export default CartContext