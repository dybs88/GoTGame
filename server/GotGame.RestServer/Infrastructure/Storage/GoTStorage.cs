using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public interface IGoTStorage
  {
    void CreateGameStorage(int gameId);
    string GetString(int gameId, string key);
    void SetString(int gameId, string key, string value);
  }

  public class GoTStorage : IGoTStorage
  {
    private Dictionary<int, GameStorage> storage;

    public GoTStorage()
    {
      storage = new Dictionary<int, GameStorage>();
    }

    public void CreateGameStorage(int gameId)
    {
      if (gameId != 0)
        storage.Add(gameId, new GameStorage());
    }

    public string GetString(int gameId, string key)
    {
      return GetGameStorage(gameId)?.GetString(key);
    }

    public void SetString(int gameId, string key, string value)
    {
      GetGameStorage(gameId)?.SetString(key, value);
    }

    private GameStorage GetGameStorage(int gameId)
    {
      if (storage.ContainsKey(gameId))
        return storage[gameId];
      else
      {
        CreateGameStorage(gameId);
        return GetGameStorage(gameId);
      }
    }
  }
}
