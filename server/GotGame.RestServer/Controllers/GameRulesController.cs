using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GotGame.RestServer.Controllers
{
  [Route("api/gamerules")]
  [ApiController]
  public class GameRulesController : ControllerBase
  {
    private IGameRulesRepository repository;

    public GameRulesController(IGameRulesRepository repo)
    {
      repository = repo;
    }
    [HttpGet("{gameRulesId}")]
    public async Task<IActionResult> GetGameRulesAsync(int gameRulesId)
    {

      return new OkObjectResult(await repository.GetGameRulesAsync(gameRulesId));
    }

    [HttpPost]
    public async Task<IActionResult> SaveGameRulesAsync([FromBody]GameRules gameRules)
    {
      await repository.SaveGameRules(gameRules);
      return new OkObjectResult(new { gameRules, gameRulesUpdated = true });
    }
  }
}
