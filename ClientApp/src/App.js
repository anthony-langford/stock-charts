import React from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

// Import components
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header clientName='Client' />
      <Router>
        <Dashboard path='/' />
      </Router>
    </>
  </ThemeProvider>
);

export default App;
