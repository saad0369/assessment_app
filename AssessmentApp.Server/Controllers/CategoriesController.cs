using AssessmentApp.Server.Models;
using AssessmentApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController(ICategoriesService categoriesService) : ControllerBase
    {
        private readonly ICategoriesService _categoriesService = categoriesService;

        [HttpGet]
        public async Task<IEnumerable<Category>> Get()
        {
            return await _categoriesService.GetCategoriesList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> Get(int id)
        {
            var category = await _categoriesService.GetCategoryById(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

    }
}
