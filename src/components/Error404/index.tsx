import React from 'react';
import { MdError } from 'react-icons/md';

import { Link } from 'react-router-dom';

import Button from '../Button';
import { Container } from './styles';

const ProductSuccess: React.FC = () => (
  <Container>
    <MdError size={140} />
    <h1>Error 404. Esta rota não existe</h1>
    <Link to="/">
      <Button type="button">
        <div>Voltar para página inicial</div>
      </Button>
    </Link>
  </Container>
);
export default ProductSuccess;
