using AssessmentApp.Server.Data;
using AssessmentApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Server.Services
{
    public class ExpensesService(AppDbContext context) : IExpensesService
    {
        private readonly AppDbContext _context = context;

        public async Task<IEnumerable<Expense>> GetExpensesList()
        {
            return await _context.Expenses.Include(x => x.User).Include(x => x.Category).ToListAsync();
        }

        public async Task<Expense> GetExpenseById(int id)
        {
            return await _context.Expenses.Include(x => x.User).Include(x => x.Category)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Expense> CreateExpense(Expense expense)
        {
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return expense;
        }

        public async Task DeleteExpense(Expense expense)
        {
            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();
        }
    }
}
