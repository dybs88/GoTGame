using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public class GameStorage : Dictionary<string, StorageItem>
  {
    private int gameId;
    private int[] playerIds;
    public GameStorage(int gameId, int[] playerIds)
    {
      this.gameId = gameId;
      this.playerIds = playerIds;
    }

    public StorageItem GetItem(string key, int playerId)
    {
      if (ContainsKey(key))
        return this[key];
      else
        return null;
    }

    public void SetItem(string key, string value)
    {
      if (ContainsKey(key))
      {
        this[key].Value = value;
        this[key].ReadedBy = new List<int>();
      }
      else
        Add(key, new StorageItem(value));
    }

    public bool TryRemoveItem(string key)
    {
      bool removeItem = true;
      if(ContainsKey(key))
      {
        StorageItem item = this[key];
        for(int i = 0; i < playerIds.Length; i++)
        {
          if (!item.ReadedBy.Contains(playerIds[i]))
          {
            removeItem = false;
            break;
          }
        }

        if (removeItem)
          Remove(key);   
      }

      return removeItem;
    }
  }
}
