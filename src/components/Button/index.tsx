import React from 'react';

import { Container } from './styles';

interface ButtonInterface {
  type: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({ children, onClick }) => (
  <Container onClick={onClick}>{children}</Container>
);
export default Button;
