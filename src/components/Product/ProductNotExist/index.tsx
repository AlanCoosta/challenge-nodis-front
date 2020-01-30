import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../../Button';

import { Container } from './styles';

const ProductNotExist: React.FC = () => (
  <Container>
    <MdSearch size={140} />
    <h1>Produto não encontrado</h1>
    <Link to="/">
      <Button type="button">
        <div>Voltar para página inicial</div>
      </Button>
    </Link>
  </Container>
);
export default ProductNotExist;
