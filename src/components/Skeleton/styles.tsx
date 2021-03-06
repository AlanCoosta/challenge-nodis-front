import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    padding: 20px;
    transition: box-shadow 0.2s;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      img {
        transform: scale(1.05);
      }
    }

    button {
      background: #0db14f;
      color: #fff;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#0db14f')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Product = styled(Link)`
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

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-weight: bold;
    color: #999;
    font-size: 12px;
    margin-top: 5px;
    text-decoration: line-through;

    &:last-child {
      margin: 5px 0 20px;
      /* font-size: 16px; */
      color: #0db14f;
      text-decoration: none;
    }
  }
`;
