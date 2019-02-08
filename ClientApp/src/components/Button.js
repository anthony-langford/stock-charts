import styled, { withTheme } from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: inherit;
  color: white;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.primaryColor};
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.hoverBackgroundColor ? props.hoverBackgroundColor : props.theme.button.secondaryHover};
    cursor: pointer;
  }
`;

export default withTheme(Button);
