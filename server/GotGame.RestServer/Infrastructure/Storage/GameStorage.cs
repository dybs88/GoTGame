using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public class GameStorage
  {
    private Game Game { get; set; }
    private IList<Player> Players { get { return Game?.Players; } }
    private GameRules GameRules { get { return Game?.GameRules; } }
    private SessionStorage SessionStorage { get; set; }
    public GameBoard GameBoard { get; set; }

    public GameStorage(Game game)
    {
      Game = game;
      SessionStorage = new SessionStorage(Players.Select(p => p.Id).ToArray());
    }

    public SessionItem GetItem(string key, int playerId)
    {
      return SessionStorage.GetItem(key, playerId);
    }

    public void RemovePlayer(int playerId)
    {
      GameBoard.RemovePlayer(playerId);
      SessionStorage.RemovePlayer(playerId);
    }

    public void SetItem(string key, string value)
    {
      SessionStorage.SetItem(key, value);
    }

    public bool TryRemoveItem(string key)
    {
      return SessionStorage.TryRemoveItem(key);
    }

    public void UpdateGame(Game game)
    {
      if(Game.Players.Count > game.Players.Count)
      {
        int removedPlayerId = Game.Players.FirstOrDefault(p => game.Players.Select(pl => pl.Id).Contains(p.Id) == false).Id;
        RemovePlayer(removedPlayerId);
      }

      Game = game;
    }

    public void UpdateGameBoard(GameBoard gameBoard)
    {
      GameBoard = gameBoard;
    }
  }
}
