import CartContext from './cartContext'
function CartContextProvider(props){
    
    return(
        <CartContext.Provider>{props.children}</CartContext.Provider>
    )
}