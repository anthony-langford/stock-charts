import React from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

// Import components
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header clientName='Anthony Langford' />
      <Router>
        <Dashboard path='/' />
        <Stocks path='/stocks' />
      </Router>
    </>
  </ThemeProvider>
);

export default App;
