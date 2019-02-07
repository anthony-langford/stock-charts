import React from 'react';
import styled, { withTheme } from 'styled-components';
import Text from './Text';

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

const TitleWrapper = styled.div`
  display: flex;
  min-width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
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

const ProjectOwnerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 8px;
`;

const ProjectOwner = styled(Text)`
  color: ${props => props.theme.secondaryColor};
  font-size: 10px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectType = styled(Text)`
  font-size: 10px;
  color: #9EA0A5;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectManagerWrapper = styled(ProjectOwnerWrapper)`
  flex-direction: row;
  justify-content: flex-end;
  width: 200px;
`;

const ProjectManager = styled.span`
  font-size: 10px;
  color: #9EA0A5;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.padding ? props.padding : '0 8px'};
  min-width: 128px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  max-width: 128px;
  max-height: 132px;
  border-radius: 5px;
  background-color: ${props => props.color ? props.color : null};
`;

const BadgeText = styled(Text)`
  padding: 0 6px;
  color: ${props => props.color ? props.color : null};
  font-size: 10px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.div`
  min-width: 16px;
  min-height: 16px;
  background-color: white;
`;

const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

const NotificationBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border-radius: 50%;
`;

const NotificationText = styled(BadgeText)`
  color: white;
  font-size: 13px;
`;

const ArrowWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0 8px;
  align-items: center;
`;

const CardLong = ({
  theme,
  title,
  owner,
  type,
  projectManager,
  deliverable,
  status,
  notifications
}) => (
  <CardItem>
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>

    <Wrapper>
        <ProjectOwnerWrapper>
          <ProjectOwner>{owner}</ProjectOwner>
          <ProjectType>{type}</ProjectType>
        </ProjectOwnerWrapper>

        <ProjectManagerWrapper>
          <ProjectManager>{projectManager}</ProjectManager>
        </ProjectManagerWrapper>

     <BadgeWrapper padding={'0 40px'}>
        <Badge color={theme.secondaryColor}>
          <Icon />
          <BadgeText color={'white'}>{deliverable}</BadgeText>
        </Badge>
      </BadgeWrapper>

      <BadgeWrapper>
        <Badge color={'#F4F4F4'}>
          <Icon />
          <BadgeText color={theme.primaryColor}>{status}</BadgeText>
        </Badge>
      </BadgeWrapper>

      <NotificationWrapper>
        <NotificationBadge>
          <NotificationText>{notifications.length}</NotificationText>
        </NotificationBadge>
      </NotificationWrapper>

      <ArrowWrapper>
        <Text color={'#9EA0A5'}>→</Text>
      </ArrowWrapper>
    </Wrapper>
  </CardItem>
);

export default withTheme(CardLong);