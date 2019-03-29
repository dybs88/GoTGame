using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/games")]
  public class GameController : Controller
  {
    private IGamesRepository gamesRepository;
    private IPlayersRepository playersRepository;

    public GameController(IGamesRepository gamesRepo, IPlayersRepository playersRepo)
    {
      gamesRepository = gamesRepo;
      playersRepository = playersRepo;
    }
    [HttpPost("creategame")]
    public async Task<IActionResult> CreateGame([FromBody]Game game)
    {
      await gamesRepository.SaveGameAsync(game);
      return new OkObjectResult(new { game, player = game.Players.First(), gameRules = game.GameRules });
    }

    [HttpGet]
    public async Task<IActionResult> GetGames()
    {
      return new OkObjectResult(await gamesRepository.GetGamesAsync());
    }

    [HttpGet("{gameId}")]
    public async Task<IActionResult> GetGame(int gameId)
    {
      return new OkObjectResult(await gamesRepository.GetGameAsync(gameId));
    }

    [HttpPost]
    public async Task<IActionResult> JoinGame([FromBody]FrontPlayer frontPlayer)
    {
      Game game = await gamesRepository.GetGameAsync(frontPlayer.GameId);

      if(game.PlayerCount < game.GameRules.MaxPlayers)
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

    [HttpPut]
    public async Task<IActionResult> ConfirmJoinGame([FromBody]FrontPlayer frontPlayer)
    {
      var player = frontPlayer.Player;
      player.Status = PlayerStatus.Joined;
      await playersRepository.SavePlayerAsync(player);

      return new OkObjectResult(new { player, playerJoined = true });
    }
  }
}
