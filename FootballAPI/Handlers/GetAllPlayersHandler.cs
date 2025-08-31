using FootballAPI.Controllers;
using FootballAPI.Models;
using FootballAPI.Repo;
using MediatR;

namespace FootballAPI.Handlers
{
    public class GetAllPlayersHandler : IRequestHandler<GetAllPlayersQuery, List<FootballPlayer>>
    {
        private readonly IPlayerRepository _repository;

        public GetAllPlayersHandler(IPlayerRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<FootballPlayer>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
        {
            return await _repository.GetAllAsync();
        }
    }
}
