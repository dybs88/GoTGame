using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/gamerules")]
  [ApiController]
  public class GameRulesController : ControllerBase
  {
    private IGameRulesRepository repository;
    private IGameListRepository gameListRepository;
    private IGoTStorage goTStorage;

    public GameRulesController(IGameRulesRepository repo, IGameListRepository gameListRepo, IGoTStorage storage)
    {
      repository = repo;
      gameListRepository = gameListRepo;
      goTStorage = storage;
    }
    [HttpGet("{gameRulesId}")]
    public async Task<IActionResult> GetGameRulesAsync(int gameRulesId)
    {
      return new OkObjectResult(await repository.GetGameRulesAsync(gameRulesId));
    }

    [HttpGet("{gameId}")]
    public async Task<IActionResult> GetGameRulesByGameId(int gameId)
    {
      return new OkObjectResult(await repository.GetGameRulesByGameIdAsync(gameId));
    }

    [HttpPost]
    public async Task<IActionResult> SaveGameRules([FromBody]GameRules gameRules)
    {
      await repository.SaveGameRulesAsync(gameRules);

      Game game = await gameListRepository.GetGameAsync(gameRules.GameId);
      goTStorage.UpdateGame(game);

      return new OkObjectResult(new { gameRules, gameRulesUpdated = true });
    }
  }
}
