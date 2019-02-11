import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import StockList from './StockList';
import CreateStock from './CreateStock';
import EditStock from './EditStock';
import DeleteStock from './DeleteStock';

// Import helpers
import getAndSet from '../helpers/getAndSet';

const Stocks = () => {
  const activeStock = useStore(state => state.activeStock.item);
  const stocks = useStore(state => state.stocks.items);
  const setStocks = useActions(actions => actions.stocks.set);
  const setPrices = useActions(actions => actions.prices.set);

  useEffect(() => {
    getAndSet('stocks', setStocks);
    getAndSet('prices', setPrices);
  }, []);

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        <h2>Stocks</h2>
        <StockList
          stocks={stocks}
        />
      </ContentWrapper>

      <CreateStock />

      <EditStock
        title={'Edit Stock'}
      />

      <DeleteStock
        activeStock={activeStock}
      />
    </PageWrapper>
  );
};

export default Stocks;
