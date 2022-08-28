import './App.css';
import {Route, Switch} from 'react-router-dom'
import { Fragment } from 'react';
import ProductsPage from './Pages/Productspage';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
function App() {
  
  return (
    <Fragment>
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
      </Switch>
    </Fragment>
  );
}

export default App;
