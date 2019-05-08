using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public interface IGoTStorage
  {
    void CreateGameStorage(int gameId, int[] playerIds);
    StorageItem GetItem(int gameId, string key, int playerId = 0);
    void SetItem(int gameId, string key, string value);
    bool TryRemoveItem(int gameId, string key);
  }

  public class GoTStorage : IGoTStorage
  {
    private Dictionary<int, GameStorage> storage;

    public GoTStorage()
    {
      storage = new Dictionary<int, GameStorage>();
    }

    public void CreateGameStorage(int gameId, int[] playerIds)
    {
      if (gameId != 0)
        storage.Add(gameId, new GameStorage(gameId, playerIds));
    }

    public StorageItem GetItem(int gameId, string key, int playerId = 0)
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
  }
}
