
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
        <button >Add</button>
        <button >Remove</button>
    </div>
    </li>
);
};

export default CartItem;
