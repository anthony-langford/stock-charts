using System;
using System.Collections.Generic;

namespace stock_charts
{
    public partial class Price
    {
        public int Id { get; set; }
        public int? StockId { get; set; }
        public decimal Value { get; set; }
        public string Currency { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
