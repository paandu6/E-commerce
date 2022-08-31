import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Storage/cartContext";
import classes from "./Products.module.css";

function ProductList(props) {
  const amountinputref = useRef();

  const ctx = useContext(CartContext);

  function submitHandler(event) {
    event.preventDefault();
    const enteredamount = amountinputref.current.value;
    const enteredamountnumber = +enteredamount;
    console.log(typeof props.title);
    ctx.AddItem({
      title: props.title,
      price: props.price,
      amount: enteredamountnumber,
      id: props.id,
      img: props.img,
    });
    const data = {
      title: props.title,
      price: props.price,
      amount: enteredamountnumber,
      id: props.id,
      img: props.img,
    };
    // fetch(
    //   "https://crudcrud.com/api/d450766922f54441ade86efd9749dd51/cartpaanduale809gmailcom",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  }
  // const email=localStorage.getItem('mail')
  // let stremail=''

  //     for(let i=0;i<=email.length;i++){
  //         if(email[i] ==='@'){
  //             continue;
  //         }else{
  //             return stremail = stremail + email[i]
  //         }
  //     }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.labeltitle}>
        <label>{props.title}</label>
        <input type="number" step={1} defaultValue={1} ref={amountinputref} />
      </div>
      <Link to={`/products/${props.id}`}>
        <img src={props.img} className={classes.img} />
      </Link>
      <div className={classes.labeltitle}>
        <label>{props.price}</label>
        <button>ADD</button>
      </div>
    </form>
  );
}
export default ProductList;
