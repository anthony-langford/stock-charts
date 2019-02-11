import React from 'react';
import { useStore, useActions } from 'easy-peasy';
import styled, { withTheme } from 'styled-components';

// Import components
import Modal from './Modal';
import { default as ButtonBase } from './Button';

// Import helpers
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
  // padding: 0 0 40px;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text.color}
`;

const Content = styled.h2`
  box-sizing: border-box;
  padding: 24px;
  margin: 0;
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

const ButtonsWrapper = styled(Wrapper)`
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const Button = styled(ButtonBase)`
  margin: 12px;
  min-width: 150px;
  background-color: ${props => props.backgroundColor && props.backgroundColor}
  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`;

const DeleteStock = ({
  theme
}) => {
  const modalState = useStore(state => state.modal.item);
  const closeModal = useActions(actions => actions.modal.close);
  const activeStock = useStore(state => state.activeStock.item);
  const deleteStock = useActions(actions => actions.stocks.delete);

  const onClick = () => {
    fetchAndSet('DELETE', 'stocks', activeStock)
      .then(result => {
        deleteStock(result);
        closeModal();
      });
  };

  return (
    <>
      <Modal isOpen={modalState === 'deleteStock'}>
        <Wrapper>
          <TitleWrapper>
            <Title fontSize={18} fontWeight={500}>Delete Stock</Title>

            <Spacer />

            <CloseButton onClick={() => closeModal()} tabIndex='0'>X</CloseButton>
          </TitleWrapper>
          
          <Content>Are you sure you want to delete {activeStock ? activeStock.name : null}?</Content>
          <ButtonsWrapper>
            <Button
              onClick={onClick}
              backgroundColor={theme.tertiaryColor}
              hoverBackgroundColor={theme.button.tertiaryHover}
            >
              Yes
            </Button>
            <Button
              onClick={closeModal}
              backgroundColor={theme.primaryColor}
              hoverBackgroundColor={theme.button.primaryHover}
            >
              No
            </Button>
          </ButtonsWrapper>
        </Wrapper>
      </Modal>
    </>
  );
}

export default withTheme(DeleteStock);
