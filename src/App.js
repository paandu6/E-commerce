import './App.css';
import {Route} from 'react-router-dom'
import { Fragment } from 'react';
import ProductsPage from './Pages/Productspage';
import Home from './Pages/Home';
import About from './Pages/About';
function App() {
  
  return (
    <Fragment>
      <Route path="/products">
      <ProductsPage />
      </Route>
      <Route path="/home">
      <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>
    </Fragment>
  );
}

export default App;
