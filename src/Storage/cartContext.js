import React from "react"

const CartContext=React.createContext(()=>{
    showcart(){
        
    }
    return(
        {
            showcart:()=>{}
        }
    )
})
export default CartContext