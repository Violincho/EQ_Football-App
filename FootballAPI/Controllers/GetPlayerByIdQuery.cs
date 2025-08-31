using FootballAPI.Models;
using MediatR;

namespace FootballAPI.Controllers
{
    public record GetPlayerByIdQuery(int id) : IRequest<FootballPlayer?>;
    
}