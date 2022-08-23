import { useContext, useRef } from "react"
import CartContext from "../../Storage/cartContext"

function ProductList(props){ 
    const amountinputref=useRef()

    const ctx=useContext(CartContext)

    function submitHandler(event){
        event.preventDefault()
        const enteredamount=amountinputref.current.value
        const enteredamountnumber= +enteredamount

        ctx.AddItem({
            title:props.title,
            price:props.price,
            amount:enteredamountnumber,
            id:props.id
        })
    }
    return(
        <form onSubmit={submitHandler}>
            <label>{props.title}</label>    
            <label>{props.price}</label>
            <input type='number' step={1} defaultValue={1} ref={amountinputref}/>
            <img src={props.img} />
        <button>Add</button>
        </form>
    )
}
export default ProductList