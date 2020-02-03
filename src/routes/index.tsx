import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error404 from '../components/Error404';
import Cart from '../pages/Cart';
import Main from '../pages/Main';
import ProductDetails from '../pages/ProductDetails';
import PurchaseProduct from '../pages/PurchaseProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/cart" component={Cart} />
    <Route path="/product/:id" component={ProductDetails} />
    <Route path="/success" component={PurchaseProduct} />

    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
