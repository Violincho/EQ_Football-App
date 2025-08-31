using FootballAPI.Models;

namespace FootballAPI.Repo
{
    public interface IPlayerRepository
    {
        Task<List<FootballPlayer>> GetAllAsync();
        Task<FootballPlayer?> GetByIdAsync(int id);
        Task<List<FootballPlayer>> SearchAsync(string query);
        Task AddAsync(FootballPlayer player);
    }
}
