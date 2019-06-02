using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Services
{
  public interface IGameService
  {
    GameBoard StartGame(Game game);
  }

  public class GameService : IGameService
  {
    private IGoTStorage goTStorage; 

    public GameService(IGoTStorage storage)
    {
      goTStorage = storage;
    }

    public GameBoard StartGame(Game game)
    {
      var gameBoard = new GameBoard(game);
      goTStorage.UpdateGame(game);
      goTStorage.UpdateGameBoard(gameBoard);

      return gameBoard;
    }
  }
}
