using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;
using System;
using Microsoft.AspNetCore.Http;
using GotGame.RestServer.Infrastructure.Storage;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/players")]
  [ApiController]
  public class PlayerController : Controller
  {
    private IPlayersRepository playerRepository;
    private IChatRepository chatRepository;
    private IGameListRepository gamesRepository;
    private IGoTStorage goTStorage;

    public PlayerController(IPlayersRepository playersRepo, IChatRepository chatRepo, IGameListRepository gamesRepo, IGoTStorage storage)
    {
      playerRepository = playersRepo;
      chatRepository = chatRepo;
      gamesRepository = gamesRepo;
      goTStorage = storage;
    }

    [HttpDelete("delete/{gameId}/{playerId}")]
    public async Task<IActionResult> DeletePlayer(int gameId, int playerId)
    {
      await playerRepository.DeletePlayerAsync(playerId);

      Game game = await gamesRepository.GetGameAsync(gameId);

      goTStorage.UpdateGame(game);
      chatRepository.DeletePlayerChats(playerId);
      return new OkObjectResult(new { playerDeleted = true });
    }

    [HttpGet("id{playerId}")]
    public async Task<IActionResult> GetPlayer(int playerId)
    {
      return new OkObjectResult(await playerRepository.GetPlayerAsync(playerId));
    }

    [HttpGet("ip{ipAddress}")]
    public async Task<IActionResult> GetPlayerByIpAsync(string ipAddress)
    {
      return new OkObjectResult(await playerRepository.GetPlayerByIpAsync(ipAddress));
    }

    [HttpPost]
    public async Task<IActionResult> UpdatePlayer([FromBody]Player player)
    {
      await playerRepository.SavePlayerAsync(player);

      if(player.GameId != 0)
      {
        Game game = await gamesRepository.GetGameAsync(player.GameId);
        goTStorage.UpdateGame(game);
      }

      return new OkObjectResult(player);
    }
  }
}
