using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace FootballAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PlayersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PlayersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPlayers()
        {
            var players = await _mediator.Send(new GetAllPlayersQuery());
            return Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id) => Ok(await _mediator.Send(new GetPlayerByIdQuery(id)));

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery] string q)
        {
            var result = await _mediator.Send(new SearchPlayersQuery(q));
            return Ok(result);
        }

    }
}
