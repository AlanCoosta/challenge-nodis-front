import React from 'react';
import { useSelector } from 'react-redux';

import CartEmpty from '../../components/Cart/CartEmpty';
import CartTable from '../../components/Cart/CartTable';
import { formatPrice } from '../../util/format';
import { Container, Box } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector((state: any) =>
    state.cart.map((product: any) => ({
      ...product,
      subtotal: formatPrice(product.salePrice * product.amount),
    }))
  );

  return (
    <Container>
      <Box>{!cart.length ? <CartEmpty /> : <CartTable />}</Box>
    </Container>
  );
};

export default Cart;
