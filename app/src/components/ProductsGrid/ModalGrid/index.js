import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalInfos, Text, Title } from './styles';

function ModalGrid({ modalIsOpen, closeModal, modalData }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Data Product"
    >
      {modalData.map(item => (
        <ModalInfos key={item._id}>
          <button
            type="button"
            onClick={() => {
              closeModal();
            }}
          >
            <i className="ri-close-fill ri-2x" />
          </button>

          <Title>Barcode</Title>
          <Text>{item.barcode}</Text>
          <Title>Status</Title>
          <Text>{item.status}</Text>
          <Title>Packaging</Title>
          <Text>{item.packaging}</Text>
          <Title>Brands</Title>
          <Text>{item.brands}</Text>
          <Title>Categories</Title>
          <Text>{item.categories}</Text>
        </ModalInfos>
      ))}
    </Modal>
  );
}

ModalGrid.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  modalData: PropTypes.array,
};

ModalGrid.defaultProps = {
  closeModal: () => {},
  modalData: [],
};

export default ModalGrid;
