/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './ModalGrid';
import DataService from '../../services/DataService';

import {
  GridWrapper,
  Grid,
  GridCard,
  ImgWrapper,
  Text,
  Title,
  TitleWrapper,
  BtnComparative,
  TableComparativeWrapper,
} from './styles';

function ProductsGrid() {
  const [productsData, setProductsData] = useState([]);
  const [tableComparative, setTableComparative] = useState(false);
  const [modalData, setModalData] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  async function fetchData() {
    await DataService.getData().then(response => {
      const { data } = response;

      setProductsData([...data]);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = id => {
    setIsOpen(true);
    setModalData(productsData.filter(item => item._id === id));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const TableRow = ({ row }) => (
    <tbody>
      <tr>
        <td key={row.product_name}>{row.product_name}</td>
        <td key={row.packaging}>{row.packaging}</td>
        <td key={row.brands}>{row.brands}</td>
        <td key={row.categories}>{row.categories}</td>
        <td key={row.quantity}>{row.quantity}</td>
      </tr>
    </tbody>
  );

  return (
    <GridWrapper>
      <TitleWrapper>
        <h2>Welcome to Fitness Foods App.</h2>
        <h3>
          This app collects data from{' '}
          <a
            href="https://world.openfoodfacts.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Food Facts
          </a>
        </h3>
      </TitleWrapper>
      <Grid>
        {productsData.length ? (
          productsData.map(item => (
            <GridCard key={item._id} onClick={() => openModal(item._id)}>
              <ImgWrapper>
                <img src={item.image_url} alt={item.brands} />
              </ImgWrapper>
              <Title>Product Name</Title>
              <Text>{item.product_name}</Text>
            </GridCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        modalData={modalData}
      />
      <BtnComparative
        type="button"
        onClick={() => setTableComparative(!tableComparative)}
      >
        See table comparative.
      </BtnComparative>
      <TableComparativeWrapper hide={tableComparative}>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Packaging</th>
              <th>Brands</th>
              <th>Categories</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {productsData.map(row => (
            <TableRow row={row} key={row._id} />
          ))}
        </table>
      </TableComparativeWrapper>
    </GridWrapper>
  );
}

ProductsGrid.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  row: PropTypes.array,
};

ProductsGrid.defaultProps = {
  row: [],
};

export default ProductsGrid;
