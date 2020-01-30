import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../../Button';
import { Container } from '../../Cart/CartEmpty/styles';

const ProductSuccess: React.FC = () => (
  <Container>
    <MdCheckCircle size={140} />
    <h1>Compra finalizada com sucesso!</h1>
    <Link to="/">
      <Button type="button">
        <div>Voltar para página inicial</div>
      </Button>
    </Link>
  </Container>
);
export default ProductSuccess;
