import React, { useState } from 'react';
import { useActions } from 'easy-peasy';
import styled, { withTheme } from 'styled-components';

// Import components
import Modal from './Modal';
import FloatingButton from './FloatingButton';
import CreatePriceForm from './CreatePriceForm';

// Import helper functions
import fetchAndSet from '../helpers/fetchAndSet';

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

const CreatePrice = ({
  stockId
}) => {
  const [modalState, setModalState] = useState(false);
  const addPrice = useActions(actions => actions.prices.add);

  const handleClick = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  }

  const onSubmit = (values, { setSubmitting }) => {
    values['stockId'] = stockId;
    console.log(values);
    fetchAndSet('POST', 'prices', values)
    .then(result => {
      console.log(result);
      addPrice(result);
      setModalState(false);
      setSubmitting(false);
    });
  };

  return (
    <>
      <FloatingButton onClick={handleClick} />

      <Modal isOpen={modalState} handleCloseModal={handleCloseModal}>
      {/* <Modal isOpen={true} handleCloseModal={handleCloseModal}> */}
        <Wrapper>
          <TitleWrapper>
            <Title fontSize={18} fontWeight={500}>New Price</Title>

            <Spacer />

            <CloseButton onClick={handleCloseModal} tabIndex='0'>X</CloseButton>
          </TitleWrapper>
          
          <CreatePriceForm onSubmit={onSubmit} />
          {/* <button onClick={handleCloseModal}>Close Modal</button> */}
        </Wrapper>
      </Modal>
    </>
  );
};

export default withTheme(CreatePrice);
