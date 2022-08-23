import './App.css';
import Header from './Compnents/Layout/Header';
import Products from './Compnents/Products/Products';
import Footer from './Compnents/Layout/Footer';
import Cart from './Compnents/Cart/Cart'
import { useState } from 'react';
import CartContextProvider from './Storage/CartContextProvider';

function App() {
  const [cartshow,setcartshow]=useState(false)
  function showcartHandler(){
    setcartshow(true)
  }
  function hidecartHandler(){
    setcartshow(false)
  }
  return (
    <CartContextProvider>
      <Header onClick={showcartHandler} />
      {cartshow && <Cart onClick={hidecartHandler}/>}
      <Products />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
