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
    private IChatRepository chatRepository;

    public GameController(IGameService gameService,
      IGameListRepository gameListRepo,
      IGoTStorage storage,
      IChatRepository chatRepo)
    {
      this.gameService = gameService;
      gameListRepository = gameListRepo;
      goTStorage = storage;
      chatRepository = chatRepo;
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
    public async Task<IActionResult> QuickStart(dynamic requestData)
    {
      Game game = await gameListRepository.GetGameAsync(5002);
      GameBoard gameBoard = gameService.StartGame(game);
      return new OkObjectResult(new { game, gameBoard });
    }
  }
}
