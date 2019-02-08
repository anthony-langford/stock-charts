using System;
using System.Collections.Generic;

namespace stock_charts
{
    public partial class Stock
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
