import React from 'react';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../../Button';

import { Container } from './styles';

const CartEmpty: React.FC = () => (
  <Container>
    <MdRemoveShoppingCart size={140} />

    <h1>Adicione produtos ao carrinho</h1>

    <Link to="/">
      <Button type="button">
        <div>Voltar para página inicial</div>
      </Button>
    </Link>
  </Container>
);
export default CartEmpty;
