using System.Numerics;
using AssessmentApp.Server.Models;

namespace AssessmentApp.Server.Services
{
    public interface IExpensesService
    {
        Task<IEnumerable<Expense>> GetExpensesList();
        Task<Expense> GetExpenseById(int id);
        Task<Expense> CreateExpense(Expense expense);
        Task DeleteExpense(Expense expense);

    }
}
