using AssessmentApp.Server.Models;

namespace AssessmentApp.Server.Services
{
    public interface ICategoriesService
    {
        Task<IEnumerable<Category>> GetCategoriesList();
        Task<Category> GetCategoryById(int id);

    }
}
