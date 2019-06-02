using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Services;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  [ApiController]
  public class GameController : Controller
  {
    private IGameService gameService;
    private IGameListRepository gameListRepository;
    private IGoTStorage goTStorage;

    public GameController(IGameService gameService, IGameListRepository gameListRepo, IGoTStorage storage)
    {
      this.gameService = gameService;
      gameListRepository = gameListRepo;
      goTStorage = storage;
    }

    [HttpPost("start")]
    public async Task<IActionResult> StartGame(dynamic requestData)
    {
      int gameId = requestData["gameId"];
      Game game = await gameListRepository.GetGameAsync(gameId); 
      GameBoard gameBoard = gameService.StartGame(game);

      return new OkObjectResult(new { game, gameBoard });
    }

    [HttpPost("quickstart")]
    public IActionResult QuickStart(dynamic requestData)
    {
      GameRules gameRules = new GameRules { Id = 99990, GameId = 99999, AllHouses = true, MaxPlayers = 6, CanLookPlayerCard = true, WinCondition = Infrastructure.Consts.WinCondition.Castles, WinCastlesCount = 7, RoundsCount = 10 };
      List<Player> players = new List<Player>
      {
        new Player { Id = 99991, GameId = 99999, IsGameCreator = true, Name = "Robert", House = Infrastructure.Consts.HouseType.Baratheon, Status = Infrastructure.Consts.PlayerStatus.Ready  },
        new Player { Id = 99992, GameId = 99999, Name = "Eddard", House = Infrastructure.Consts.HouseType.Stark, Status = Infrastructure.Consts.PlayerStatus.Ready  },
        new Player { Id = 99993, GameId = 99999, Name = "Tywin", House = Infrastructure.Consts.HouseType.Lannister, Status = Infrastructure.Consts.PlayerStatus.Ready  },
        new Player { Id = 99994, GameId = 99999, Name = "Euron", House = Infrastructure.Consts.HouseType.Greyjoy, Status = Infrastructure.Consts.PlayerStatus.Ready  },
        new Player { Id = 99995, GameId = 99999, Name = "Oberyn", House = Infrastructure.Consts.HouseType.Martell, Status = Infrastructure.Consts.PlayerStatus.Ready  },
        new Player { Id = 99996, GameId = 99999, Name = "Loras", House = Infrastructure.Consts.HouseType.Tyrell, Status = Infrastructure.Consts.PlayerStatus.Ready  },
      };
      Game game = new Game { Id = 99999, Name = "Quick game", GameRules = gameRules, Players = players };
      goTStorage.CreateGameStorage(game);
      GameBoard gameBoard = gameService.StartGame(game);
      return new OkObjectResult(new { game, gameBoard });
    }
  }
}
