import './App.css';
import {Route, Switch} from 'react-router-dom'
import ProductsPage from './Pages/Productspage';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
import CartContextProvider from './Storage/CartContextProvider';
import Login from './Pages/Login'
import { AuthContextProvider } from './Storage/authContext';
function App() {
  
  return (
    <AuthContextProvider>
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
      <Route path="/products" exact>
      <ProductsPage />
      </Route>
      <Route path="/products/:productId">
      <ProductDetails />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      </Switch>
    </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
