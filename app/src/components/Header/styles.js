import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;

  img {
    width: 100%;
    max-width: 120px;
  }

  i {
    color: salmon;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    font-size: 14px;
    text-align: center;
  }
`;
