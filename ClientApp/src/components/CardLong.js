import React from 'react';
import styled, { withTheme } from 'styled-components';
import Text from './Text';
import {default as ButtonBase } from './Button';

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

  @media (min-width: 600px) {
    min-width: 160px;
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

const Button = styled(ButtonBase)`
  @media (max-width: 1000px) {
    margin: 0 4px;
  }
  margin: 0 16px;
`;

const CardLong = ({
  id,
  name,
  code,
  handleClickEdit,
  handleClickDelete,
  theme
}) => (
  <CardItem>
    <TitleWrapper>
      {window.innerWidth < 400 ?
        <Title>{code}</Title> :
        <Title>{name} ({code})</Title>
      }
    </TitleWrapper>

    <Wrapper>
       <Button
        onClick={handleClickEdit}
        value={id}
        backgroundColor={theme.primaryColor}
        hoverBackgroundColor={theme.button.primaryHover}
      >
        Edit
      </Button>
      <Button
        onClick={handleClickDelete}
        value={id}
        backgroundColor={theme.tertiaryColor}
        hoverBackgroundColor={theme.button.tertiaryHover}
      >
        Delete
      </Button>
    </Wrapper>
  </CardItem>
);

export default withTheme(CardLong);