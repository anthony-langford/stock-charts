import React from 'react';
import { Line } from 'react-chartjs-2';

const useCurrencyLocale = (value, prices) => value.toLocaleString('en-CA',
  { style: 'currency', currency: prices[0].currency }
);

const Chart = ({
  stock,
  prices
}) => {
  const xAxesOptions = [{
    scaleLabel: {
      display: true,
      labelString: 'Time',
      fontSize: 16,
    },
    type: 'time',
  }]

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

  const options = {
    scales: {
      xAxes: xAxesOptions,
      yAxes: yAxesOptions
    }
  };

  const priceList = prices.length ? (
    prices.map(price => (
      { x: price.timestamp, y: price.value }
    ))
  ) : null;

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
    <div>
      <h2>Price Chart</h2>
      <h3>Company: {stock ? (`${stock.name} (${stock.code.toUpperCase()})`) : 'Loading...'}</h3>
      <span>Description: {stock ? stock.description : 'Loading...'}</span>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
