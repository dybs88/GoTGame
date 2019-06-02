using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public interface IGoTStorage
  {
    void CreateGameStorage(Game game);
    SessionItem GetItem(int gameId, string key, int playerId = 0);
    void RemovePlayer(int gameId, int playerId);
    void SetItem(int gameId, string key, string value);
    bool TryRemoveItem(int gameId, string key);
    void UpdateGame(Game game);
    void UpdateGameBoard(GameBoard gameBoard);
  }

  public class GoTStorage : IGoTStorage
  {
    private Dictionary<int, GameStorage> storage;

    public GoTStorage()
    {
      storage = new Dictionary<int, GameStorage>();
    }

    public void CreateGameStorage(Game game)
    {
      if (!storage.ContainsKey(game.Id))
        storage.Add(game.Id, new GameStorage(game));
    }

    public SessionItem GetItem(int gameId, string key, int playerId = 0)
    {
      return GetGameStorage(gameId)?.GetItem(key, playerId);
    }

    public void SetItem(int gameId, string key, string value)
    {
      GetGameStorage(gameId).SetItem(key, value);
    }

    public bool TryRemoveItem(int gameId, string key)
    {
      return GetGameStorage(gameId).TryRemoveItem(key);
    }

    private GameStorage GetGameStorage(int gameId)
    {
      if (storage.ContainsKey(gameId))
        return storage[gameId];
      else
        return null;
    }

    public void RemovePlayer(int gameId, int playerId)
    {
      GetGameStorage(gameId).RemovePlayer(playerId);
    }

    public void UpdateGame(Game game)
    {
      GetGameStorage(game.Id).UpdateGame(game);
    }

    public void UpdateGameBoard(GameBoard gameBoard)
    {
      GetGameStorage(gameBoard.GameId).UpdateGameBoard(gameBoard);
    }
  }
}
