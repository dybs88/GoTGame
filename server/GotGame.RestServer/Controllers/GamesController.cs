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
  public class GamesController : Controller
  {
    private IGamesRepository gamesRepository;
    private IPlayersRepository playersRepository;

    public GamesController(IGamesRepository gamesRepo, IPlayersRepository playersRepo)
    {
      gamesRepository = gamesRepo;
      playersRepository = playersRepo;
    }

    [HttpGet]
    public async Task<IActionResult> GetGames()
    {
      return new JsonResult(await gamesRepository.GetGames());
    }

    [HttpGet("{gameId}")]
    public async Task<IActionResult> GetGame(int gameId)
    {
      return new OkObjectResult(await gamesRepository.GetGame(gameId));
    }

    [HttpPost]
    public async Task<IActionResult> JoinGame([FromBody]FrontPlayer frontPlayer)
    {
      Player newPlayer = new Player { GameId = frontPlayer.GameId, Status = PlayerStatus.Joining };
      await playersRepository.SavePlayer(newPlayer);

      return new OkObjectResult(new { newPlayer, playerAdded = true });
    }

    [HttpPut]
    public async Task<IActionResult> ConfirmJoinGame([FromBody]FrontPlayer frontPlayer)
    {
      var player = frontPlayer.Player;
      player.Status = PlayerStatus.Joined;
      await playersRepository.SavePlayer(player);

      return new OkObjectResult(new { player, playerJoined = true });
    }
  }
}
