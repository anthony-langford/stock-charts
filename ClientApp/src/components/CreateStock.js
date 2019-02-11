import React, { useState } from 'react';
import { useStore, useActions } from 'easy-peasy';
import styled from 'styled-components';
import { navigate } from '@reach/router';

// Import components
import Modal from './Modal';
import FloatingButton from './FloatingButton';
import CreateStockForm from './CreateStockForm';

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

const CreateStock = () => {
  const modalState = useStore(state => state.modal.item);
  const setModalState = useActions(actions => actions.modal.set);
  const closeModal = useActions(actions => actions.modal.close);
  const addStock = useActions(actions => actions.stocks.add);

  const onSubmit = (values, { setSubmitting }) => {
    fetchAndSet('POST', 'stocks', values)
    .then(result => {
      addStock(result);
      closeModal();
      navigate('/stocks');
      setSubmitting(false);
    });
  };

  return (
    <>
      <FloatingButton onClick={() => setModalState('createStock')} />

      <Modal isOpen={modalState === 'createStock'}>
        <Wrapper>
          <TitleWrapper>
            <Title fontSize={18} fontWeight={500}>New Stock</Title>

            <Spacer />

            <CloseButton onClick={() => closeModal()} tabIndex='0'>X</CloseButton>
          </TitleWrapper>
          
          <CreateStockForm onSubmit={onSubmit} />
        </Wrapper>
      </Modal>
    </>
  );
};

export default CreateStock;
