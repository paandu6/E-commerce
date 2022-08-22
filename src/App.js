import './App.css';
import Header from './Compnents/Layout/Header';
import Products from './Compnents/Products/Products';
import Footer from './Compnents/Layout/Footer';
import Cart from './Compnents/Cart/Cart'
import { useState } from 'react';

function App() {
  const [cartshow,setcartshow]=useState(false)
  function showcartHandler(){
    setcartshow(true)
  }
  return (
    <div>
      <Header onClick={showcartHandler} />
      {cartshow && <Cart />}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
