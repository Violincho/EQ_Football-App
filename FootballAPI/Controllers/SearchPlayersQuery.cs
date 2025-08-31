using FootballAPI.Models;
using MediatR;

namespace FootballAPI.Controllers
{
    public record SearchPlayersQuery(string query) : IRequest<List<FootballPlayer>>;
    
}
