
const CartItem = (props) => {
const price = `$${props.price.toFixed(2)}`;

return (
    <li >
    <div>
        <h2>{props.name}</h2>
        <div>
        <span >{price}</span>
        </div>
    </div>
    <div>
        <button onClick={props.AddItem}>Add</button>
        <button onClick={props.RemoveItem}>Remove</button>
    </div>
    </li>
);
};

export default CartItem;
