import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';
import StockList from './StockList';

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
        <h2>Stocks</h2>
        <StockList stocks={stocks} />
        {/* {stocks.map(stock => (
          <div key={stock.name}>
            <Link to={`${stock.id}`}>{stock.name}, {stock.code}, {stock.description}</Link>
          </div>
        ))} */}
      </ContentWrapper>

      <CreateStock />
    </PageWrapper>
  );
};

export default Stocks;
