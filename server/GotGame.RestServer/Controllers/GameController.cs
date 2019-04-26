using System;
using System.Collections.Generic;
using System.Linq;
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
    public async Task<IActionResult> ConfirmJoinGame([FromBody]FrontPlayer frontPlayer)
    {
      var player = frontPlayer.Player;
      player.Status = PlayerStatus.Joined;
      await playersRepository.SavePlayerAsync(player);

      return new OkObjectResult(new { player, playerJoined = true });
    }

    [HttpPost("creategame")]
    public async Task<IActionResult> CreateGame([FromBody]Game game)
    {
      await gamesRepository.SaveGameAsync(game);
      chatRepository.CreateGameChat(game.Id, "Public");
      storage.CreateGameStorage(game.Id);
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

    [HttpGet("refresh/{gameId}")]
    public async Task<IActionResult> RefreshGame(int gameId)
    {
      Game game = await gamesRepository.GetGameAsync(gameId);
      dynamic responseData = new { game };
      if (storage.GetString(gameId, SessionKeys.NewGameCreator) == bool.TrueString)
      {
        storage.SetString(gameId, SessionKeys.NewGameCreator, bool.FalseString);
        responseData.newGameCreator = true;
        responseData.newGameCreatorId = game.Players.First(p => p.IsGameCreator).Id;
      }

      return new OkObjectResult(responseData);
    }
  }
}
