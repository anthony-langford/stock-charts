import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as LinkBase } from "@reach/router";
import Text from './Text';
import CardLong from './CardLong';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #EAEDF3;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04);
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 24px 32px;
`;

const HeaderTitle = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #3E3F42;
`;

const Link = styled(LinkBase)`
  text-decoration: none;
`;

const LinkText = styled(Text)`
  padding: 0 4px;
  font-size: 14px;
  color: #9EA0A5;
`;

const Divider = styled.hr`
  margin: 0;
  border: 0.5px solid #EAEDF3;
`;

const CardList = ({
  title,
  link,
  projects
}) => (
  <CardWrapper>
    <Header>
      <HeaderTitle>{title} ({projects.length})</HeaderTitle>
      <Link to={link}>
        <LinkText>See All</LinkText>
        <LinkText>→</LinkText>
      </Link>
    </Header>

    <Divider />

    {projects.map((project, i) => (
      <Fragment key={project.id}>
        <Link to={`${link}/${project.id}`}>
          <CardLong
            title={project.title}
            owner={project.owner}
            type={project.type}
            projectManager={project.projectManager}
            deliverable={project.deliverable}
            status={project.status}
            notifications={project.notifications}
          />
        </Link>

        {i === projects.length ? null : <Divider />}
      </Fragment>
    ))}
  </CardWrapper>
);

CardList.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  projects: PropTypes.array
};

CardList.defaultProps = {
  title: '',
  link: '',
  projects: []
};

export default CardList;
