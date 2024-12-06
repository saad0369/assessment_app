using AssessmentApp.Server.Data;
using AssessmentApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Server.Services
{
    public class UsersService(AppDbContext context) : IUsersService
    {
        private readonly AppDbContext _context = context;

        public async Task<User> GetCurrentUser()
        {
            return await _context.Users.Include(x => x.Budgets).Include(x => x.Expenses)
                .FirstOrDefaultAsync(x => x.Id == 1);
        }
    }
}
