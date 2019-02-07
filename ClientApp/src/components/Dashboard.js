import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import components
import Sidebar from './Sidebar';
import CreateProject from './CreateProject';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DashboardContent = styled.div`
  flex-direction: column;
  flex-grow: 1;
  z-index: 0;
  min-width: calc(100vw - 590px);
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 32px 40px;
  align-items: center;
  background-color: #F7F8FA;
  color: #53627C;
`;

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);

  const fetchStocks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stocks/', {
        mode: 'cors'
      });
      const stocks = await response.json();
      setStocks(stocks);
      console.log(stocks);
    } catch(err) {
      console.error(err); // TypeError: failed to fetch
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <>
      <DashboardWrapper>
        <Sidebar />

        <DashboardContent>
          hello
        </DashboardContent>

        <CreateProject />
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
