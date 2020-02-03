import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  max-width: 1020px;
  margin: 0 auto;

  img {
    width: 100px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #000;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
