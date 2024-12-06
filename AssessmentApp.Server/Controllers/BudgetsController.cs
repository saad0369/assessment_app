using AssessmentApp.Server.Models;
using AssessmentApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BudgetsController(IBudgetsService budgetsService) : ControllerBase
    {
        private readonly IBudgetsService _budgetsService = budgetsService;

        [HttpGet]
        public async Task<IEnumerable<Budget>> Get()
        {
            return await _budgetsService.GetBudgetsList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Budget>> Get(int id)
        {
            var budget = await _budgetsService.GetBudgetById(id);

            if (budget == null)
            {
                return NotFound();
            }

            return Ok(budget);
        }

        [HttpPost]
        public async Task<ActionResult<Budget>> Post(Budget budget)
        {
            await _budgetsService.CreateBudget(budget);

            return CreatedAtAction("Post", new { id = budget.Id }, budget);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid id");

            var budget = await _budgetsService.GetBudgetById(id);
            if (budget == null)
            {
                return NotFound();
            }

            await _budgetsService.DeleteBudget(budget);

            return NoContent();
        }
    }
}
