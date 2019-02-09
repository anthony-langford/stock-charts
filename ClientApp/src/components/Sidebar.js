import React from 'react';
import { Link, Match } from '@reach/router';
import styled from 'styled-components';

// Hide sidebar for mobile
const SidebarWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  z-index: 1;
  max-width: 240px;
  min-height: calc(100vh - 70px);
  margin: 70px 0 0;
  padding: 32px 0 0;
  background-color: #182C4F;
  box-shadow: 3px 0 5px 0 #F1F1F3;
`;

const NavTabs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 0 40px 0;
  width: 100%;
  height: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TabName = styled.div`
  flex: 1;
  margin: 0 48px;
  color: ${props => props.selected ? props.theme.primaryColor : 'white'};
  font-size: 14px;
`;

const SelectorVisual = styled.div`
  width: 3px;
  height: 100%;
  ${props => props.selected ? `background-color: ${props.theme.primaryColor};` : null}
`;

function Sidebar({ companyName }) {
  let navList = [];

  const icons = [
    {
      id: 0,
      path: '/',
      matchPath: '/',
      title: 'Dashboard'
    },
    {
      id: 1,
      path: '/stocks',
      matchPath: '/stocks/*',
      title: 'Stocks'
    },
    {
      id: 2,
      path: '/about',
      matchPath: '/about/*',
      title: 'About'
    }
  ];

  icons.forEach(icon => navList.push(
    <Match path={`${icon.matchPath}`} key={icon.id}>
      {props =>
        props.match ? (
          <SidebarLink to={icon.path} selected={true}>
              <TabName key={icon.title} selected={true}>{icon.title}</TabName>
              <SelectorVisual selected={true} />
          </SidebarLink>
        ) : (
          <SidebarLink to={icon.path} selected={true}>
              <TabName key={icon.title} selected={false}>{icon.title}</TabName>
              <SelectorVisual selected={false} />
          </SidebarLink>
        )
      }
    </Match>
  ));

  return (
    <SidebarWrapper>
      <NavTabs>
        {navList}
      </NavTabs>
    </SidebarWrapper>
  )
}

export default Sidebar;
