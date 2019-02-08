import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';

const Plus = styled(Text)`
  color: white;
  font-size: 42px;
  padding: 0 0 8px 0;
`;

const FloatingButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  right: 60px;
  bottom: 30px;
  width: 65px;
  height: 65px;
  text-align:center;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.quaternaryColor};
  border-radius: 50%;
  border: none;
  box-shadow: 2px 4px 24px #15305D;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const FloatingButton = ({ onClick }) => (
  <FloatingButtonBase onClick={onClick}>
    <Plus>+</Plus>
  </FloatingButtonBase>
);

FloatingButton.propTypes = {
  onClick: PropTypes.func,
};

FloatingButton.defaultProps = {
  onClick: () => {},
};

export default withTheme(FloatingButton);
