import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import nodisIcon from '../../assets/images/nodisIcon.png';
import { Container, Cart } from './styles';

const Header: React.FC = () => {
  const cartSize = useSelector((state: any) => state.cart.length);

  return (
    <Container>
      <Link to="/" data-testid="home">
        <img src={nodisIcon} alt="Nodis Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </Cart>
    </Container>
  );
};

export default Header;
