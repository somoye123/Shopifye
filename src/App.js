import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { fetchProducts } from './redux/actions/productsAction';
import { connect } from 'react-redux';
import {
  Home,
  About,
  Error,
  Checkout,
  Products,
  SingleProduct,
  PrivateRoute,
  Cart,
} from './pages';

function App({ fetchProducts }) {
  React.useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const mapDispatchToProps = { fetchProducts };

export default connect(null, mapDispatchToProps)(App);
