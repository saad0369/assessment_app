using AssessmentApp.Server.Models;
using AssessmentApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController(IExpensesService expensesService) : ControllerBase
    {
        private readonly IExpensesService _expensesService = expensesService;

        [HttpGet]
        public async Task<IEnumerable<Expense>> Get()
        {
            return await _expensesService.GetExpensesList();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Expense>> Get(int id)
        {
            var expense = await _expensesService.GetExpenseById(id);

            if (expense == null)
            {
                return NotFound();
            }

            return Ok(expense);
        }
        [HttpPost]
        public async Task<ActionResult<Expense>> Post(Expense expense)
        {
            await _expensesService.CreateExpense(expense);

            return CreatedAtAction("Post", new { id = expense.Id }, expense);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid id");

            var expense = await _expensesService.GetExpenseById(id);
            if (expense == null)
            {
                return NotFound();
            }

            await _expensesService.DeleteExpense(expense);

            return NoContent();
        }
    }
}
