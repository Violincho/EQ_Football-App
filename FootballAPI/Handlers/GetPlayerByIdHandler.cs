using FootballAPI.Controllers;
using FootballAPI.Models;
using FootballAPI.Repo;
using MediatR;

namespace FootballAPI.Handlers
{
    public class GetPlayerByIdHandler : IRequestHandler<GetPlayerByIdQuery, FootballPlayer?>
    {
        private readonly IPlayerRepository _repository;

        public GetPlayerByIdHandler(IPlayerRepository repository)
        {
            _repository = repository;
        }
        public async Task<FootballPlayer?> Handle(GetPlayerByIdQuery request, CancellationToken cancellationToken)
        {
            return await _repository.GetByIdAsync(request.id);
        }
    }
}
