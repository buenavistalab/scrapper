import styled from 'styled-components';

export const ModalInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding: 20px 0;

  button {
    background: transparent;
    border: unset;
    margin: 10px;
  }
`;

export const Text = styled.p`
  padding: 5px 10px 15px;
  font-size: 14px;
`;

export const Title = styled.p`
  padding: 10px 10px 0;
  font-size: 16px;
  font-weight: bolder;
`;
