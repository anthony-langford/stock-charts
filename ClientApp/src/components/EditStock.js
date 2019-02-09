import React from 'react';
import styled, { withTheme } from 'styled-components';

// Import components
import Modal from './Modal';
import EditStockForm from './EditStockForm';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  padding: 0 0 40px;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text.color}
`;

const CloseButton = styled.button`
  padding: 0;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  outline: none;
`;

const Spacer = styled.div`
  margin: 0 auto;
`;

const EditStock = ({
  title,
  modalState,
  handleCloseModal,
  onSubmit,
  stock
}) => {
  return (
    <>
      <Modal isOpen={modalState} handleCloseModal={handleCloseModal}>
        <Wrapper>
          <TitleWrapper>
            <Title fontSize={18} fontWeight={500}>{title}</Title>

            <Spacer />

            <CloseButton onClick={handleCloseModal} tabIndex='0'>X</CloseButton>
          </TitleWrapper>
          
          <EditStockForm onSubmit={onSubmit} stock={stock} />
        </Wrapper>
      </Modal>
    </>
  );
};

export default withTheme(EditStock);
