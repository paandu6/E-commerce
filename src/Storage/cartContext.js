import React, { useReducer } from "react"

const CartContext=React.createContext(()=>{
    return(
        {
            items:[],
            totalAmount:0,
            productsArr:[],
            AddToCart:(items)=>{},
            RemoveFromCart:(id)=>{}
        }
    )
})
export default CartContext