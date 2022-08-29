import './App.css';
import {Route, Switch,Redirect} from 'react-router-dom'
import ProductsPage from './Pages/Productspage';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
import CartContextProvider from './Storage/CartContextProvider';
import Login from './Pages/Login'
import { AuthContextProvider } from './Storage/authContext';
import AuthContext from './Storage/authContext';
import { useContext } from 'react';
function App() {
  let authctx = useContext(AuthContext)
  console.log(authctx.isLoggedin)
  return (
    <CartContextProvider>
      <Switch>
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/contactus">
      <ContactUs />
      </Route>
      {authctx.isLoggedin && <Route path="/products" exact>
      <ProductsPage />
      </Route>}
      <Route path="/products/:productId">
      <ProductDetails />
      </Route>
      {! authctx.isLoggedin && <Route path="/login">
      <Login />
      </Route>}
      <Route path='*'>
        <Redirect to='/home'></Redirect>
      </Route>
      </Switch>
    </CartContextProvider>
  );
}

export default App;
