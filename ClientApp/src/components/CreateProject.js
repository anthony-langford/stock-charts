import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Modal from './Modal';
import FloatingButton from './FloatingButton';
import CreateProjectForm from './CreateProjectForm';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  padding: 0 0 40px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text.color}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const Spacer = styled.div`
  margin: 0 auto;
`;

const CreateProject = () => {
  const [modalState, setModalState] = useState(false);

  const handleClick = () => {
    console.log('click');
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  }

  return (
    <>
      <FloatingButton onClick={handleClick} />

      <Modal isOpen={modalState} handleCloseModal={handleCloseModal}>
      {/* <Modal isOpen={true} handleCloseModal={handleCloseModal}> */}
        <Wrapper>
          <TitleWrapper>
            <Title fontSize={18} fontWeight={500}>New Project</Title>

            <Spacer />

            <CloseButton onClick={handleCloseModal} tabIndex='0'>X</CloseButton>
          </TitleWrapper>
          
          <CreateProjectForm />
          {/* <button onClick={handleCloseModal}>Close Modal</button> */}
        </Wrapper>
      </Modal>
    </>
  );
};

export default withTheme(CreateProject);
