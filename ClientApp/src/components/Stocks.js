import React, { useState, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import StockList from './StockList';
import EditStock from './EditStock';
import CreateStock from './CreateStock';

// Import helpers
import getAndSet from '../helpers/getAndSet';
import fetchAndSet from '../helpers/fetchAndSet';
import getStockById from '../helpers/getStockById';

const Stocks = () => {
  const [editStockModalState, setEditStockModalState] = useState(false);
  const [stock, setStock] = useState(null);
  const [deleteStockModalState, setDeleteStockModalState] = useState(false);
  const stocks = useStore(state => state.stocks.items);
  const setStocks = useActions(actions => actions.stocks.set);
  const setPrices = useActions(actions => actions.prices.set);
  const editStock = useActions(actions => actions.stocks.edit);

  useEffect(() => {
    getAndSet('stocks', setStocks);
    getAndSet('prices', setPrices);
  }, []);

  const handleClickEdit = (e) => {
    e.preventDefault();
    const stockToEdit = getStockById(parseInt(e.target.value), stocks);
    setStock(stockToEdit);
    setEditStockModalState(true);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    setDeleteStockModalState(true);
  };

  const handleCloseModal = () => {
    setEditStockModalState(false);
  }

  const onSubmit = (values, { setSubmitting }) => {
    values.id = stock.id;
    values.createdOn = stock.createdOn;
    fetchAndSet('PUT', 'stocks', values)
    .then(result => {
      console.log('HUZZAH', result);
      editStock(result);
      setEditStockModalState(false);
      setSubmitting(false);
    });
  };

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        <h2>Stocks</h2>
        <StockList
          stocks={stocks}
          handleClickEdit={handleClickEdit}
          handleClickDelete={handleClickDelete}
        />
      </ContentWrapper>

      <EditStock
        title={'Edit Stock'}
        modalState={editStockModalState}
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmit}
        stock={stock}
      />
      <CreateStock />
    </PageWrapper>
  );
};

export default Stocks;
