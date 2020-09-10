import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;
