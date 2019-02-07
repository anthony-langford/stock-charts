using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Stock.Models
{
    public class StockContext : DbContext
    {
        public StockContext(DbContextOptions<StockContext> options)
            : base(options)
        { }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Price> Prices { get; set; }
    }

    public class Stock
    {
        public int id { get; set; }
        public string name { get; set; }
        public string code { get; set; }
        public string description { get; set; }

        public List<Stock> Stocks { get; set; }
    }

    public class Price
    {
        public int price_id { get; set; }
        public int stock_id { get; set; }
        public decimal price { get; set; }

        public string currency { get; set; }
        public Price Prices { get; set; }
    }
}