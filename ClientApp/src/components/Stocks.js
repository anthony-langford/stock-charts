import React, { useState, useEffect } from 'react';

// Import components
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';
import CreateStock from './CreateStock';


const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [prices, setPrices] = useState([]);

  const fetchAndSet = async (endpoint = '', setter = () => {}) => {
    try {
      const response = await fetch(`https://localhost:5001/api/${endpoint}/`, {
        mode: 'cors'
      });
      const data = await response.json();
      setter(data);
      console.log(data);
    } catch(err) {
      console.error(err); // TypeError: failed to fetch
    }
  };

  useEffect(() => {
    fetchAndSet('Stocks', setStocks);
    fetchAndSet('Prices', setPrices);
  }, []);

  return (
    <PageWrapper>
      <Sidebar />

      <ContentWrapper>
        
      </ContentWrapper>

      <CreateStock />
    </PageWrapper>
  );
};

export default Stocks;
