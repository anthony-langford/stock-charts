import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <ReactModal
      // portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
}

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});

console.log(media.desktop('width: 40%'))

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    z-index: 1001;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 0;
    background-color: ${props => props.theme.modal.backgroundColor};
  }

  &__content {
    position: absolute;
    display: flex;
    z-index: 1001;
    top: 50%;
    left: 50%;
    ${media.phone('width: 50px;')}
    transform: translate(-50%, -50%);
    border: 1px solid #EAEDF3;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
    overflow: auto;
    border-radius: 4px;
    outline: none;
  }
`;

const Modal = ({
  isOpen,
  handleCloseModal,
  children
}) => (
  <StyledModal
    isOpen={isOpen}
    contentLabel='Create Project'
    onRequestClose={handleCloseModal}
    shouldCloseOnOverlayClick={true}
  >
    {children}
  </StyledModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Modal.defaultProps = {
  isOpen: false,
  handleCloseModal: () => {}
};

export default withTheme(Modal);
