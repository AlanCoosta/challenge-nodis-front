import React from 'react';

import ProductSuccess from '../../components/Product/ProductSuccess';

import { Container, Box } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <Box>
        <ProductSuccess />
      </Box>
    </Container>
  );
};

export default Cart;
