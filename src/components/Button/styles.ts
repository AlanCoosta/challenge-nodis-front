import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;

  align-items: center;

  background: #0db14f;
  color: #fff;

  border: 0;
  border-radius: 5px;

  overflow: hidden;
  margin: auto 0 0;

  font-weight: bold;
  text-transform: uppercase;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#0db14f')};
  }

  div {
    display: flex;

    align-items: center;

    background: rgba(0, 0, 0, 0.1);

    padding: 12px;

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;

    margin: 0 5px;

    font-weight: bold;
    text-align: center;
  }
`;
