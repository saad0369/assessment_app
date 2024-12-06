using AssessmentApp.Server.Data;
using AssessmentApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Server.Services
{
    public class CategoriesService(AppDbContext context) : ICategoriesService
    {
        private readonly AppDbContext _context = context;

        public async Task<IEnumerable<Category>> GetCategoriesList()
        {
            return await _context.Categories.Include(x => x.Expenses).ToListAsync();
        }

        public async Task<Category> GetCategoryById(int id)
        {
            return await _context.Categories.Include(x => x.Expenses)
                .FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
