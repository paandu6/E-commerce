import { useReducer } from "react";
import CartContext from "./cartContext";
import wt1 from "../Assets/wt1.jpg";
import wt2 from "../Assets/wt2.jpg";
import hd1 from "../Assets/hd1.jpg";
import sh1 from "../Assets/sh1.jpg";
import s1 from "../Assets/shirt1.jpg";

const defaultValue = {
  items: [],
  totalAmount: 0,
};
const productsArr = [
  {
    id: 1,
    title: "Watches",
    price: 100,
    imageUrl: wt1,
  },
  {
    id: 2,
    title: "HeadPhones",
    price: 50,
    imageUrl: hd1,
  },
  {
    id: 3,
    title: "Shoes",
    price: 70,
    imageUrl: sh1,
  },
  {
    id: 4,
    title: "Shirts",
    price: 100,
    imageUrl: s1,
  },
];

function cartreducer(state, action) {
  if (action.type === "ADD") {
    console.log('action items',action.item)
    const updatedtotalamount =
      state.totalAmount + action.item.price * action.item.amount;
    const existinindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingitem = state.items[existinindex];
    let updateditems;
    if (existingitem) {
      const updateditem = {
        ...existingitem,
        amount: existingitem.amount + action.item.amount,
      };
      updateditems = [...state.items,action.item];
      updateditems[existinindex] = updateditem;
    } else {
      updateditems = state.items.concat(action.item);
    }
    return {
      items: updateditems,
      totalAmount: updatedtotalamount,
    };
  }
  if (action.type === "REMOVE") {
    const existinindex = state.items.findIndex((item) => item.id === action.id);
    let existingitem = state.items[existinindex];

    let updatedtotalamount = state.totalAmount - existingitem.price;

    let updateditems;
    if (existingitem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updateditem = { ...existingitem, amount: existingitem.amount - 1 };
      updateditems = [...state.items];
      updateditems[existinindex] = updateditem;
    }
    return {
      items: updateditems,
      totalAmount: updatedtotalamount,
    };
  }
  return defaultValue;
}
function CartContextProvider(props) {
  const [cartstate, cartdispatch] = useReducer(cartreducer, defaultValue);

  function AddToCartHandler(item) {
    cartdispatch({ type: "ADD", item: item });
    console.log('add to ccart handler',item);
  }
  function removetocartHandler(id) {
    cartdispatch({ type: "REMOVE", id: id });
  }
  const products = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    productsArr: productsArr,
    AddItem: AddToCartHandler,
    RemoveItem: removetocartHandler,
  };
  return (
    <CartContext.Provider value={products}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
