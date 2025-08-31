using FootballAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballAPI.Repo
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly FootballDbContext _context;

        public PlayerRepository(FootballDbContext context)
        {
            _context = context;
        }
        
        public async Task<List<FootballPlayer>> GetAllAsync()
        {
            return await _context.FootballPlayers.ToListAsync();
        }

        public async Task<FootballPlayer?> GetByIdAsync(int id)
        {
            return await _context.FootballPlayers.FindAsync(id);
        }

        public async Task<List<FootballPlayer>> SearchAsync(string query)
        {
            return await _context.FootballPlayers
                .Where(p => p.Name.Contains(query) || p.Position.Contains(query))
                .ToListAsync();
        }

        public Task AddAsync(FootballPlayer player) //implement later
        {
            throw new NotImplementedException();
        }

    }
}
