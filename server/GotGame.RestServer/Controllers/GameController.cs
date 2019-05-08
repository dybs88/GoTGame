using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/games")]
  public class GameController : Controller
  {
    private IGamesRepository gamesRepository;
    private IPlayersRepository playersRepository;
    private IChatRepository chatRepository;
    private IGoTStorage storage;

    public GameController(IGamesRepository gamesRepo, IPlayersRepository playersRepo, IChatRepository chatRepo, IGoTStorage storage)
    {
      gamesRepository = gamesRepo;
      playersRepository = playersRepo;
      chatRepository = chatRepo;
      this.storage = storage;
    }

    [HttpPut]
    public async Task<IActionResult> ConfirmJoinGame([FromBody]dynamic requestData)
    {
      Player player = requestData["player"].ToObject<Player>();
      int gameId = requestData["gameId"];
      player.Status = PlayerStatus.Joined;
      Game game = await gamesRepository.GetGameAsync(gameId);
      if(game.Players.FirstOrDefault(p => p.House == player.House) == null)
      {
        await playersRepository.SavePlayerAsync(player);
        return new OkObjectResult(new { player, playerJoined = true });
      }

      player.House = null;
      return new OkObjectResult(new { player, playerJoined = false });
    }

    [HttpPost("creategame")]
    public async Task<IActionResult> CreateGame([FromBody]dynamic requestData)
    {
      Game game = requestData["game"].ToObject<Game>();
      string password = requestData["password"];
      await gamesRepository.SaveGameAsync(game, password);
      chatRepository.CreateGameChat(game.Id, "Public");
      storage.CreateGameStorage(game.Id, game.Players.Select(p => p.Id).ToArray());
      return new OkObjectResult(new { game, player = game.Players.First(), gameRules = game.GameRules });
    }

    [HttpGet("{gameId}")]
    public async Task<IActionResult> GetGame(int gameId)
    {
      return new OkObjectResult(await gamesRepository.GetGameAsync(gameId));
    }

    [HttpGet]
    public async Task<IActionResult> GetGames()
    {
      return new OkObjectResult(await gamesRepository.GetGamesAsync());
    }

    [HttpPost]
    public async Task<IActionResult> JoinGame([FromBody]FrontPlayer frontPlayer)
    {
      Game game = await gamesRepository.GetGameAsync(frontPlayer.GameId);

      if (game.PlayerCount < game.GameRules.MaxPlayers)
      {
        Player newPlayer = new Player { GameId = frontPlayer.GameId, Status = PlayerStatus.Joining };
        await playersRepository.SavePlayerAsync(newPlayer);

        return new OkObjectResult(new { newPlayer, playerAdded = true });
      }
      else
      {
        return new OkObjectResult(new { playerAdded = false });
      }
    }

    [HttpGet("refresh/{gameId}/{playerId}")]
    public async Task<IActionResult> RefreshGame(int gameId, int playerId)
    {
      Game game = await gamesRepository.GetGameAsync(gameId);
      dynamic responseData = new ExpandoObject();
      responseData.game = game;
      StorageItem newGameCreatorItem = storage.GetItem(gameId, SessionKeys.NewGameCreator);
      if (newGameCreatorItem != null && !newGameCreatorItem.IsReadedByPlayerId(playerId))
      {
        Player newGameCreator = game.Players.First(p => p.IsGameCreator);
        if(newGameCreator != null)
        {
          newGameCreatorItem.MarkAsReadedByPlayerId(playerId);
          responseData.newGameCreator = true;
          responseData.newGameCreatorId = newGameCreator.Id;
          storage.TryRemoveItem(gameId, SessionKeys.NewGameCreator);
        }
      }

      return new OkObjectResult(responseData);
    }

    [HttpPost("verify")]
    public async Task<IActionResult> VerifyPassword([FromBody]dynamic requestData)
    {
      int gameId = requestData["gameId"];
      string password = requestData["password"];
      return new OkObjectResult(await gamesRepository.VerifyPassword(gameId, password));
    }
  }
}
