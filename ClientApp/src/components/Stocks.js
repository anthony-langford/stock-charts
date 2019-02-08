import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import { Link } from '@reach/router';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';

// Import helpers
import fetchAndSet from '../helpers/fetchAndSet';

const Stocks = () => {
  const stocks = useStore(state => state.stocks.items);
  const setStocks = useActions(actions => actions.stocks.set);
  const setPrices = useActions(actions => actions.prices.set);

  useEffect(() => {
    fetchAndSet('stocks', setStocks);
    fetchAndSet('prices', setPrices);
  }, []);

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        {stocks.map(stock => (
          <div key={stock.name}>
            <Link to={`${stock.id}`}>{stock.name}, {stock.code}, {stock.description}</Link>
          </div>
        ))}
      </ContentWrapper>

      <CreateStock />
    </PageWrapper>
  );
};

export default Stocks;
