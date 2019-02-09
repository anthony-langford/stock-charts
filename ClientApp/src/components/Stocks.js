import React, { useState, useEffect } from 'react';
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
import fetchAndSet from '../helpers/fetchAndSet';
import getStockById from '../helpers/getStockById';

const Stocks = () => {
  const [stock, setStock] = useState(null);
  const [editStockModalState, setEditStockModalState] = useState(false);
  const [deleteStockModalState, setDeleteStockModalState] = useState(false);
  const stocks = useStore(state => state.stocks.items);
  const setStocks = useActions(actions => actions.stocks.set);
  const setPrices = useActions(actions => actions.prices.set);
  const editStock = useActions(actions => actions.stocks.edit);
  const deleteStock = useActions(actions => actions.stocks.delete);

  useEffect(() => {
    getAndSet('stocks', setStocks);
    getAndSet('prices', setPrices);
  }, []);

  const handleClickEdit = e => {
    e.preventDefault();
    const stockToEdit = getStockById(parseInt(e.target.value), stocks);
    setStock(stockToEdit);
    setEditStockModalState(true);
  };

  const handleClickDelete = e => {
    e.preventDefault();
    const stockToDelete = getStockById(parseInt(e.target.value), stocks);
    setStock(stockToDelete);
    setDeleteStockModalState(true);
  };

  const handleCloseModal = () => {
    setEditStockModalState(false);
    setDeleteStockModalState(false);
  }

  // TODO: skip request if nothing changed
  const onSubmitEdit = (values, { setSubmitting }) => {
    values.id = stock.id;
    values.createdOn = stock.createdOn;
    fetchAndSet('PUT', 'stocks', values)
    .then(result => {
      editStock(result);
      setEditStockModalState(false);
      setSubmitting(false);
    });
  };

  const onSubmitDelete = () => {
    fetchAndSet('DELETE', 'stocks', stock)
    .then(result => {
      deleteStock(result);
      setDeleteStockModalState(false);
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

      <CreateStock />
      <EditStock
        title={'Edit Stock'}
        modalState={editStockModalState}
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmitEdit}
        stock={stock}
      />
      <DeleteStock
        modalState={deleteStockModalState}
        handleCloseModal={handleCloseModal}
        onClick={onSubmitDelete}
        stock={stock}
      />
    </PageWrapper>
  );
};

export default Stocks;
