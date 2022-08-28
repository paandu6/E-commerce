import { useReducer } from 'react'
import CartContext from './cartContext'
const defaultValue={
    items:[],
    totalAmount:0
}
const productsArr = [
    {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
]

function cartreducer(state,action){
    if(action.type === 'ADD') {
        const updatedtotalamount=state.totalAmount + action.item.price * action.item.amount
        const existinindex=state.items.findIndex(item =>
            item.id === action.item.id
        )
        const existingitem=state.items[existinindex]
        let updateditems
        if(existingitem){
            const  updateditem={
                ...existingitem,
                amount:existingitem.amount + action.item.amount
            }
            updateditems=[...state.items]
            updateditems[existinindex]=updateditem
        }else{
            updateditems=state.items.concat(action.item)   
        }
        return{
            items:updateditems,
            totalAmount:updatedtotalamount
        }
    }
    if(action.type === 'REMOVE'){

        const existinindex=state.items.findIndex(item =>
            item.id === action.id
        )
        let existingitem=state.items[existinindex] 

        let updatedtotalamount =state.totalAmount - existingitem.price

        let updateditems
        if(existingitem.amount === 1){
            updateditems=state.items.filter((item)=> item.id !== action.id)
        }else{
            let updateditem={...existingitem, amount:existingitem.amount - 1}
            updateditems=[...state.items]
            updateditems[existinindex]=updateditem
        }
        return{
            items:updateditems,
            totalAmount:updatedtotalamount
        }
    }
    return defaultValue
}
function CartContextProvider(props){
    const[cartstate,cartdispatch]=useReducer(cartreducer,defaultValue)

    function AddToCartHandler(item){
        cartdispatch({type:'ADD',item:item})
    }
    function removetocartHandler(id){
        cartdispatch({type:'REMOVE',id:id})
    }
    const products={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        productsArr:productsArr,
        AddItem:AddToCartHandler,
        RemoveItem:removetocartHandler
    }
    return(
        <CartContext.Provider value={products}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider