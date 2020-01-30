import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Box = styled.div`
  max-width: 1020px;
  margin: 0 auto 50px;

  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 20px;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
      transform: scale(1.05);
    }
  }

  button {
    margin-bottom: 10px;
  }
`;

export const ProductList = styled.ul`
  .details {
    display: flex;
    flex-direction: column;

    svg {
      align-self: center;
    }

    img {
      align-self: center;
      margin-bottom: 5px;
      transition: all 0.3s;
    }

    > h3 {
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }

    > p {
      line-height: 24px;
      margin: 10px 0;
    }

    > span {
      font-weight: bold;
      color: #999;
      font-size: 12px;
      margin-top: 5px;
      text-decoration: line-through;

      &:last-child {
        margin: 5px 0 20px;
        font-size: 16px;
        color: #0db14f;
        text-decoration: none;
      }
    }
  }
`;

export const Back = styled(Link)`
  width: 30px;
`;
