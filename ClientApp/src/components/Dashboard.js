import React, { useEffect } from 'react';
import { useActions } from 'easy-peasy';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';

// Import helpers
import fetchAndSet from '../helpers/fetchAndSet';

const Dashboard = () => {
  const addStocks = useActions(actions => actions.stocks.set);
  const addPrices = useActions(actions => actions.prices.set);

  useEffect(() => {
    fetchAndSet('stocks', addStocks);
    fetchAndSet('prices', addPrices);
  }, []);

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        <h1>hello</h1>
      </ContentWrapper>

      <CreateStock />
    </PageWrapper>
  );
};

export default Dashboard;
