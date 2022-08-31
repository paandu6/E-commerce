import { useContext } from "react"
import CartContext from "../../Storage/cartContext"
function CartButton(props){
    const ctx =useContext(CartContext)

    const numberofitems=ctx.items.reduce((cur,item)=>{
        return cur+item.amount
    },0)
    return(
        <div>
        <button onClick={props.onClick}>Cart</button>
        <label>{numberofitems}</label>
        </div>
    )
}
export default CartButton