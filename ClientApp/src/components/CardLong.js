import React from 'react';
import styled, { withTheme } from 'styled-components';
import Text from './Text';
import Button from './Button';

const CardItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px 16px 24px;
  
  height: 72px;
  overflow: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const TitleWrapper = styled.div`
  display: flex;

  @media (min-width: 640px) {
    min-width: 200px;
  }
`;

const Title = styled(Text)`
  box-sizing: border-box;
  padding: 0 24px 0 0;
  font-size: 18px;
  font-weight: 500;
  color: #3E3F42;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeleteButton = styled(Button)`
  @media (max-width: 700px) {
    margin: 0 2px;
  }
  margin: 0 16px;
  background-color: ${props => props.theme.tertiaryColor};
  &:hover {
    background-color: ${props => props.theme.button.tertiaryHover};
  }
`;

const EditButton = styled(Button)`
  @media (max-width: 700px) {
    margin: 0 2px;
  }
  margin: 0 16px;
  background-color: ${props => props.theme.primaryColor};
  &:hover {
    background-color: ${props => props.theme.button.primaryHover};
  }
`;

const CardLong = ({
  id,
  name,
  code,
  description,
}) => (
  <CardItem>
    <TitleWrapper>
      {window.innerWidth < 630 ?
        <Title>{code}</Title> :
        <Title>{name} ({code})</Title>
      }
    </TitleWrapper>

    <Wrapper>
       <EditButton>Edit</EditButton>
       <DeleteButton>Delete</DeleteButton>
    </Wrapper>
  </CardItem>
);

export default withTheme(CardLong);