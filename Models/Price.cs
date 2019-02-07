using System;
using System.Collections.Generic;

namespace stock_charts
{
    public partial class Price
    {
        public int PriceId { get; set; }
        public int? StockId { get; set; }
        public decimal Price1 { get; set; }
        public string Currency { get; set; }
        public DateTime CreatedOn { get; set; }

        public virtual Stock Stock { get; set; }
    }
}
