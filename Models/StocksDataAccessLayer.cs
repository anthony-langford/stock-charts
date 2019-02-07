using Microsoft.EntityFrameworkCore;  
using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;  

namespace stock_charts.Models
{  
    public class StocksDataAccessLayer  
    {  
        StocksContext db = new StocksContext();
        // Get all stocks
        public IEnumerable<Stock> GetAllStocks()
        {
            try
            {
                return db.Stock.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add new stock
        public int AddStock(Stock stock)
        {
            try
            {
                db.Stock.Add(stock);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update a stock
        public int UpdateStock(Stock stock)
        {
            try
            {
                db.Entry(stock).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Get the details of a particular stock
        public Stock GetStockData(int id)
        {
            try
            {
                Stock stock = db.Stock.Find(id);
                return stock;
            }
            catch
            {
                throw;
            }
        }

        // Delete the record of a particular stock
        public int DeleteStock(int id)
        {
            try
            {
                Stock emp = db.Stock.Find(id);
                db.Stock.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        // Get all prices

        public IEnumerable<Price> GetAllPrices()
        {
            try
            {
                return db.Price.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add new price
        public int AddPrice(Price price)
        {
            try
            {
                db.Price.Add(price);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update a price
        public int UpdatePrice(Price price)
        {
            try
            {
                db.Entry(price).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Get the details of a particular price
        public Price GetPriceData(int id)
        {
            try
            {
                Price price = db.Price.Find(id);
                return price;
            }
            catch
            {
                throw;
            }
        }

        // Delete the record of a particular price
        public int DeletePrice(int id)
        {
            try
            {
                Price emp = db.Price.Find(id);
                db.Price.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Get the list of a stock's prices
        // public List<Price> GetPrices(int id)
        // {
        //     List<Price> listPrice = new List<Price>();
        //     listPrice = (from PriceList in db.Price select PriceList).ToList();
        //     return listPrice;
        // }
    }
}