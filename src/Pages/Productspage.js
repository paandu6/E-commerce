import Header from "../Compnents/Layout/Header";
import Footer from "../Compnents/Layout/Footer";
import Cart from "../Compnents/Cart/Cart";
import Products from "../Compnents/Products/Products";
import { useContext, useState } from "react";
import CartContextProvider from "../Storage/CartContextProvider";
import CartContext from "../Storage/cartContext";

function ProductsPage() {
  const [cartshow, setcartshow] = useState(false);
  const ctx = useContext(CartContext);
  async function showcartHandler() {
    setcartshow(true);
    const response = await fetch(
      "https://crudcrud.com/api/d450766922f54441ade86efd9749dd51/cartpaanduale809gmailcom"
    );
    const data = await response.json();
    console.log(data);
    ctx.AddItem({
      title: data[1].title,
      price: data[1].price,
      amount: data[1].amount,
      id: data[1].id,
      img: data[1].img,
    });
  }
  function hidecartHandler() {
    setcartshow(false);
  }
  return (
    <CartContextProvider>
      <Header onClick={showcartHandler} />
      <Products />
      {cartshow && <Cart onClick={hidecartHandler} />}
      <Footer />
    </CartContextProvider>
  );
}
export default ProductsPage;
