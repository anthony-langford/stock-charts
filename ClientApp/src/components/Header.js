import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Link } from '@reach/router';
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

const TitleWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media (max-width: 375px) {
    margin: 16px 16px;
  }
  margin: 16px 36px;
`;

const Spacer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled(Text)`
  padding-left: 16px;
  font-weight: 500;
  color: #0A1F44;
  @media (max-width: 425px) {
    width: min-content;
  }
`;

const LogoWrapper = styled(TitleWrapper)`
  align-items: right;
`;

const AppLogo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 38px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${props => props.theme && props.theme.secondaryColor};
  outline: none;
`;

const ClientLogo = styled(AppLogo)`
  border-radius: 50%;
  background-color: ${props => props.theme && props.theme.primaryColor};
`;

const ClientLogoText = styled(Text)`
  font-weight: 500;
  color: white;
`;

const Header = ({
  clientName
}) => (
  <HeaderContainer>
    <TitleWrapper>
      <Link to='/'>
        <AppLogo>SC</AppLogo>
      </Link>
      <Title>Stock Charts</Title>
    </TitleWrapper>
    <Spacer />
    <LogoWrapper>
      <ClientLogo>
        <ClientLogoText>AL</ClientLogoText>
      </ClientLogo>
      <Title>{clientName}</Title>
    </LogoWrapper>
  </HeaderContainer>
);

export default withTheme(Header);
