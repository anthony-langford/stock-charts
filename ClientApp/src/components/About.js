import React from 'react';
import styled from 'styled-components';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Span = styled.span`
  color: #e25555;
`;

const About = () => (
  <PageWrapper>
    <Sidebar />

    <ContentWrapper>
      <Wrapper>
        <span>Made with <Span>❤</Span> on Earth</span>
        <span>by Anthony Langford</span>
      </Wrapper>
    </ContentWrapper>

    <CreateStock />
  </PageWrapper>
);

export default About;
