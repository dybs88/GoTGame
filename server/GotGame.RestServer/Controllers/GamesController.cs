using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
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
    public IActionResult GetGames()
    {
      return new JsonResult(gamesRepository.GetGames());
    }

    [HttpGet("{gameId}")]
    public IActionResult GetGame(int gameId)
    {
      return new OkObjectResult(gamesRepository.GetGame(gameId));
    }

    [HttpPost]
    public IActionResult JoinGame([FromBody]FrontPlayer frontPlayer)
    {
      Player newPlayer = new Player { Name = frontPlayer.PlayerName, GameId = frontPlayer.GameId };
      playersRepository.SavePlayer(newPlayer);

      var game = gamesRepository.GetGame(frontPlayer.GameId);

      return new OkObjectResult(new { game, playerAdded = true });
    }
  }
}
