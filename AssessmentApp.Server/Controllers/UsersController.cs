using AssessmentApp.Server.Models;
using AssessmentApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace AssessmentApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController(IUsersService usersService) : ControllerBase
    {
        private readonly IUsersService _usersService = usersService;

        [HttpGet("me")]
        public async Task<ActionResult<User>> GetCurrentUser()
        {
            var user = await _usersService.GetCurrentUser();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
    }
}
