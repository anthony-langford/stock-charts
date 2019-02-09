import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreatePrice from './CreatePrice';
import Chart from './Chart';

// Import helpers
import getAndSet from '../helpers/getAndSet';
import getStockById from '../helpers/getStockById';

const filterPricesByStockId = (id, prices) => prices.filter(price => price.stockId === id);

const StockDetails = ({ stockId }) => {
  const stocks = useStore(state => state.stocks.items);
  const prices = useStore(state => state.prices.items);
  const setStocks = useActions(actions => actions.stocks.set);
  const setPrices = useActions(actions => actions.prices.set);
  // const [stockPrices, setStockPrices] = useState([]);
  const stock = getStockById(parseInt(stockId), stocks);
  const stockPrices = filterPricesByStockId(parseInt(stockId), prices);

  // This is equivalent to the componentDidMount lifecycle hook
  useEffect(() => {
    Promise.all([
      getAndSet('stocks', setStocks),
      getAndSet('prices', setPrices)
    ])
  }, []);

  // useEffect(() => {
  //   const filteredPrices = filterPricesByStockId(stockId, prices);
  //   console.log('filteredPrices', filteredPrices)
  //   setStockPrices(filterPricesByStockId(stockId, prices));
  // }, [prices.length]);

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        <Chart stock={stock} prices={stockPrices} />
      </ContentWrapper>

      <CreatePrice stockId={stockId} />
    </PageWrapper>
  );
};

export default StockDetails;
