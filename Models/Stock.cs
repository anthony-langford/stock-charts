using System;
using System.Collections.Generic;

namespace stock_charts
{
    public partial class Stock
    {
        public Stock()
        {
            Price = new HashSet<Price>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }

        public virtual ICollection<Price> Price { get; set; }
    }
}
