import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';

import { Container, Product } from '../styles';

const Main: React.FC = () => (
  <Container>
    <li>
      <Product to="/">
        <Skeleton width={230} height={230} wrapper="center" />

        <strong>
          <Skeleton />
        </strong>

        <span>
          <Skeleton />
        </span>
      </Product>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#000" />
          {' '}
0
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  </Container>
);
export default Main;
