import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
  align-items: center;
  justify-content: center;

  max-width: 1020px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
