using AssessmentApp.Server.Data;
using AssessmentApp.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace AssessmentApp.Server.Services
{
    public class BudgetsService(AppDbContext context) : IBudgetsService
    {
        private readonly AppDbContext _context = context;

        public async Task<IEnumerable<Budget>> GetBudgetsList()
        {
            return await _context.Budgets.Include(x => x.User).ToListAsync();
        }

        public async Task<Budget> GetBudgetById(int id)
        {
            return await _context.Budgets.Include(x => x.User)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Budget> CreateBudget(Budget budget)
        {
            _context.Budgets.Add(budget);
            await _context.SaveChangesAsync();
            return budget;
        }

        public async Task DeleteBudget(Budget budget)
        {
            _context.Budgets.Remove(budget);
            await _context.SaveChangesAsync();
        }
    }
}
