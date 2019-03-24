using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/players")]
  [ApiController]
  public class PlayerController : ControllerBase
  {
    private IPlayersRepository playerRepository;

    public PlayerController(IPlayersRepository playersRepo)
    {
      playerRepository = playersRepo;
    }

    [HttpDelete("{playerId}")]
    public async Task<IActionResult> DeletePlayer(int playerId)
    {
      playerRepository.DeletePlayer(playerId);
      return new OkObjectResult(new { playerDeleted = true });
    }

    [HttpGet("{playerId}")]
    public async Task<IActionResult> GetPlayer(int playerId)
    {
      return new OkObjectResult(await playerRepository.GetPlayer(playerId));
    }

    [HttpPut]
    public async Task<IActionResult> UpdatePlayer([FromBody]FrontPlayer frontPlayer)
    {
        await playerRepository.SavePlayer(frontPlayer.Player);

        return new OkObjectResult(new { frontPlayer.Player, playerReady = true});
    }
  }
}
