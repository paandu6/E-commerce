import Modal from "./Modal";
import CartItem from "./CartItem";
import CartContext from "../../Storage/cartContext";
import { useContext, useEffect } from "react";
import classes from "./Cart.module.css";
function Cart(props) {
  const ctx = useContext(CartContext);

  function AddToCartHandler(items) {
    ctx.AddItem(items);
  }
  function removetocartHandler(id) {
    ctx.RemoveItem(id);
  }
//   let cartitems=''
//   useEffect(()=>{
//     {ctx.items.forEach((item) => (
//       cartitems +=
//        `<ul>
//            <CartItem
//              name={items.title}
//              price={items.price}
//              img={items.img}
//              AddItem={AddToCartHandler.bind(null, items)}
//              RemoveItem={removetocartHandler.bind(null, items.id)}
//            />
//        </ul>`
//     ))}
//      console.log(cartitems)
//   },[ctx])
   
 ;
  const numberofitems = ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <Modal onClick={props.onClick}>
        {console.log(ctx.items)}
      {ctx?.items?.map((item) => (
       <ul>
           <CartItem
             name={item.title}
             price={item.price}
             img={item.img}
             AddItem={AddToCartHandler.bind(null, item)}
             RemoveItem={removetocartHandler.bind(null, item.id)}
           />
       </ul>
    ))}
      <div className={classes.label}>
        <span>total amount</span>
        <span>{ctx.totalAmount}</span>
        <span>Total Quantity</span>
        <span>{numberofitems}</span>

        <button onClick={props.onClick}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
