import React from 'react';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';

const Dashboard = () => {
  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        hello
      </ContentWrapper>

      <CreateStock />
    </PageWrapper>
  );
};

export default Dashboard;
