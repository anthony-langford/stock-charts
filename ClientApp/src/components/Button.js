import styled, { withTheme } from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? props.theme.primaryColor : '#4D47E8'};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.primary ? props.theme.button.primaryHover : props.theme.button.secondaryHover};
    cursor: pointer;
  }
  
  &:focus {
    outline: 0;
  }
`;

export default withTheme(Button);
