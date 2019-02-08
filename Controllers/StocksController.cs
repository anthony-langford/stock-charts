using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using stock_charts.Models;

namespace stock_charts.Controllers
{
    [Route("api/stocks")]
    public class StocksController : Controller
    {
        private readonly StocksContext _context;
        public StocksController(StocksContext context)
        {
            _context = context;
        }

        // GET: api/stocks
        [HttpGet]
        public IActionResult GetStocks()
        {
            var stocks = _context.Stock.ToList();
            return StatusCode(200, stocks);
        }

        // GET api/stocks/5
        [HttpGet("{id}")]
        public IActionResult GetStock(int id)
        {
            var stock = _context.Stock.FirstOrDefault(x => x.Id == id);
            return StatusCode(200, stock);
        }

        // POST api/stocks
        [HttpPost]
        public IActionResult Post([FromBody]Stock stock)
        {
            _context.Stock.Add(stock);
            _context.SaveChanges();
            return StatusCode(201, stock);
        }

        // PUT api/stocks/
        [HttpPut]
        public IActionResult UpdateStock([FromBody]Stock stock)
        {
            _context.Update(stock);
            _context.SaveChanges();
            return StatusCode(200, stock);
        }

        // DELETE api/stocks/5
        [HttpDelete("{id}")]
        public IActionResult DeleteStock(int id)
        {
            var stock = _context.Stock.Single(x => x.Id == id);
            _context.Remove(stock);
            _context.SaveChanges();
            return StatusCode(202, stock);
        }
    }

    [Route("api/prices")]
    public class PricesController : Controller
    {
        private readonly StocksContext _context;
        public PricesController(StocksContext context)
        {
            _context = context;
        }

        // GET: api/prices
        [HttpGet]
        public IActionResult GetPrices()
        {
            var prices = _context.Price.ToList();
            return StatusCode(200, prices);
        }

        // GET api/prices/5
        [HttpGet("{id}")]
        public IActionResult GetPrice(int id)
        {
            var price = _context.Price.FirstOrDefault(x => x.Id == id);
            return StatusCode(200, price);
        }

        // POST api/prices
        [HttpPost]
        public IActionResult Post([FromBody]Price price)
        {
            _context.Price.Add(price);
            _context.SaveChanges();
            return StatusCode(201, price);
        }

        // PUT api/prices/
        [HttpPut]
        public IActionResult UpdatePrice([FromBody]Price price)
        {
            _context.Update(price);
            _context.SaveChanges();
            return StatusCode(200, price);
        }

        // DELETE api/prices/5
        [HttpDelete("{id}")]
        public IActionResult DeletePrice(int id)
        {
            var Price = _context.Price.Single(x => x.Id == id);
            _context.Remove(Price);
            _context.SaveChanges();
            return StatusCode(202, Price);
        }
    }
}