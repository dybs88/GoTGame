using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GotGame.RestServer.Controllers
{
  [Route("api/players")]
  [ApiController]
  public class PlayersController : ControllerBase
  {
    private IPlayersRepository playersRepository;

    public PlayersController(IPlayersRepository playersRepo)
    {
      playersRepository = playersRepo;
    }

    [HttpGet("{playerId}")]
    public async Task<IActionResult> GetPlayer(int playerId)
    {
      return new OkObjectResult(await playersRepository.GetPlayer(playerId));
    }
  }
}
