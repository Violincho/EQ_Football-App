using FootballAPI.Models;
using MediatR;

namespace FootballAPI.Controllers
{
    public record  GetAllPlayersQuery() : IRequest<List<FootballPlayer>>;
    
}