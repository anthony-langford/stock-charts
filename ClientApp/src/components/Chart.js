import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const Wrapper = styled.div`
  padding: 0 0 32px 0;
`;

const Chart = ({
  stock,
  prices = []
}) => {
  // Used to add locale currency sign to y axis tick labels
  const useCurrencyLocale = prices.length ? (value, prices) => value.toLocaleString('en-CA',
  { style: 'currency', currency: prices[0].currency }
  ) : null;

  // Set x axis options
  const xAxesOptions = [{
    scaleLabel: {
      display: true,
      labelString: 'Time',
      fontSize: 16,
    },
    type: 'time',
  }];

  // Set y axis options 
  const yAxesOptions = [{
    scaleLabel: {
      display: true,
      labelString: 'Value',
      fontSize: 16,
    },
    ticks: {
      // Include a dollar sign in the ticks
      callback: (value, index, values) => (
        prices.length ? useCurrencyLocale(value, prices) : null
      )
    }
  }];

  // Chart options
  const options = {
    scales: {
      xAxes: xAxesOptions,
      yAxes: yAxesOptions
    },
  };

  // Fix chart in mobile display
  if (window.innerWidth < 400) {
    options.maintainAspectRatio = false;
  }

  // Map price list 
  const priceList = prices ? (
    prices.map(price => (
      { x: price.timestamp, y: Number(price.value.toFixed(2)) }
    ))
  ) : null;

  // Chart data
  const data = {
    datasets: [
      {
        label: `${stock ? stock.name : 'Loading...'}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 30,
        data: priceList
      }
    ]
  };

  return (
    <>
      <Wrapper>
        <h2>Price Chart</h2>
        <h3>Company: {stock ? (`${stock.name} (${stock.code.toUpperCase()})`) : 'Loading...'}</h3>
        <span>Description: {stock ? stock.description : 'Loading...'}</span>
      </Wrapper>
      <Line data={data} options={options} />
    </>
  );
};

export default Chart;
