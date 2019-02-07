import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  z-index: 1000;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.15);
`;

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 16px 36px;
  height: 100%;
`;

const Spacer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const AppLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 4px;
  color: white;
  background-color: #9B9B9B;
`;

const ClientLogo = styled(AppLogo)`
  border-radius: 50%;
`;

const Title = styled(Text)`
  padding-left: 16px;
  font-weight: 500;
  color: #0A1F44;
`;

const ClientLogoText = styled(Text)`
  font-weight: 500;
`;

export default (props) => (
  <HeaderContainer>
    <Box>
      <AppLogo>GC</AppLogo>
      <Title>Goods & Commerce</Title>
    </Box>
    <Spacer />
    <Box>
      <ClientLogo>
        <ClientLogoText>W</ClientLogoText>
      </ClientLogo>
      <Title>{props.clientName}</Title>
    </Box>
  </HeaderContainer>
);