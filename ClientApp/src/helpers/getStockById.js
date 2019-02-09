export default function getStockById(id, stocks) {
  return stocks.find(stock => stock.id === id);
};
