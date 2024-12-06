using AssessmentApp.Server.Models;

namespace AssessmentApp.Server.Services
{
    public interface IBudgetsService
    {

        Task<IEnumerable<Budget>> GetBudgetsList();
        Task<Budget> GetBudgetById(int id);
        Task<Budget> CreateBudget(Budget budget);
        Task DeleteBudget(Budget budget);
    }
}
