using AssessmentApp.Server.Models;

namespace AssessmentApp.Server.Services
{
    public interface IUsersService
    {
        Task<User> GetCurrentUser();
    }
}
