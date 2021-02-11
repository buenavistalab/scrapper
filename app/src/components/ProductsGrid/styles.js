import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding: 20px 0;
`;

export const Grid = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
`;

export const GridCard = styled.li`
  background: white;
  border: 3px solid salmon;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  width: 250px;
  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
  height: 300px;
  border-bottom: 2px solid salmon;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.p`
  padding: 10px 10px 20px;
  font-size: 14px;
`;

export const Title = styled.p`
  padding: 10px 10px 0;
  font-size: 16px;
  font-weight: bolder;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  padding: 20px 0;

  a {
    color: salmon;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    font-size: 10px;
    text-align: center;

    h2,
    h3 {
      font-weight: 400 !important;
    }
  }
`;

export const CompareWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export const BtnComparative = styled.button`
  margin: 20px auto 20px;
  border: 3px solid salmon;
  border-radius: 10px;
  padding: 5px 10px;
  background: unset;
  width: auto;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;

  &:hover {
    background: lightsalmon;
  }
`;

export const TableComparativeWrapper = styled.div`
  padding: 50px 20px;
  width: 100%;
  height: 100%;
  display: ${props => (props.hide ? 'block' : 'none')};
  border: 2px solid #000;
  margin-bottom: 50px;
  overflow: auto;

  table {
    border-collapse: collapse;

    th {
      padding: 20px;
      text-align: left;
      background-color: lightsalmon;
      color: white;
      border: 3px solid white;
    }

    td {
      padding: 20px;
    }

    tbody:nth-child(even) {
      background-color: #f2f2f2;
    }

    tbody:hover {
      background-color: #ddd;
    }
  }
`;
