using FootballAPI.Controllers;
using FootballAPI.Models;
using FootballAPI.Repo;
using MediatR;

namespace FootballAPI.Handlers
{
    public class SearchPlayersHandler : IRequestHandler<SearchPlayersQuery, List<FootballPlayer>>
    {
        private readonly IPlayerRepository _repository;

        public SearchPlayersHandler(IPlayerRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<FootballPlayer>> Handle(SearchPlayersQuery request, CancellationToken cancellationToken)
        {
            return await _repository.SearchAsync(request.query);
        }
    }
}
