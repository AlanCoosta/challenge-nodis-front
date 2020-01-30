import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import PurchaseProduct from '../pages/PurchaseProduct';
import Error404 from '../components/Error404';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/success" component={PurchaseProduct} />

      <Route path="*" component={Error404} />
    </Switch>
  );
};

export default Routes;
