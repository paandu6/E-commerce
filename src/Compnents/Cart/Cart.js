import Modal from "./Modal"
import CartItem from "./CartItem"
import CartContext from "../../Storage/cartContext"
import { useContext } from "react"
const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]

function Cart(props){
  const ctx =  useContext(CartContext)

  function AddToCartHandler(items){
    ctx.AddItem(items)
}
function removetocartHandler(id){
    ctx.RemoveItem(id)
}
    const cartitems=(<ul>
        {ctx.items.map((items)=>(
            <CartItem name={items.title} price={items.price} AddItem={AddToCartHandler.bind(null,items)}
            RemoveItem={removetocartHandler.bind(null,items.id)}/>
        ))}
    </ul>)
    return(
        <Modal onClick={props.onClick}>
            {console.log(ctx)}
            {cartitems}
            <span>total amount</span>
            <span>{ctx.totalAmount}</span>
            <button onClick={props.onClick}>Cancel</button>
            <button>Order</button>
        </Modal>
    )
}

export default Cart