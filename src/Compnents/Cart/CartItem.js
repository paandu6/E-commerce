import classes from './Cart.module.css'
const CartItem = (props) => {
const price = `$${props.price.toFixed(2)}`;

return (
    <li className={classes.list}>
        <div >
            <div className={classes.label}>
                <p>Item</p>
                <p>Price</p>
                <p>Add / Remove</p>
            </div>
            <div className={classes.label}>
            <img src={props.img} className={classes.listimg}/>
            <p>{props.price}</p>
        <div className={classes.btn}>
        <button onClick={props.AddItem}>ADD</button>
        <button onClick={props.RemoveItem}>Remove</button>
        </div>
            </div>
        </div>
    </li>
);
};

export default CartItem;
