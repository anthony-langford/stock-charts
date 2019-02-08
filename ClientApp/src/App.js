import React from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { StoreProvider } from 'easy-peasy';
import store from './Store';

// Import components
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';
import StockDetails from './components/StockDetails';

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
          <Header clientName='Anthony Langford' />
          <Router>
            <Dashboard path='/' />
            <Stocks path='/stocks' />
            <StockDetails path='/stocks/:stockId' />
          </Router>
        </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
