import Header from '../Compnents/Layout/Header'
import Footer from '../Compnents/Layout/Footer'
import Cart from '../Compnents/Cart/Cart'
import Products from '../Compnents/Products/Products';
import { useState } from 'react';
import CartContextProvider from '../Storage/CartContextProvider'


function ProductsPage(){
    const [cartshow,setcartshow]=useState(false)
    function showcartHandler(){
        setcartshow(true)
    }
    function hidecartHandler(){
        setcartshow(false)
    }
    return(
    <CartContextProvider>
        <Header onClick={showcartHandler} />
        <Products />
        {cartshow && <Cart onClick={hidecartHandler}/>}
        <Footer />
    </CartContextProvider>
    )
}
export default ProductsPage