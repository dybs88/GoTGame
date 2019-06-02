using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public class SessionStorage : Dictionary<string, SessionItem>
  {
    private int[] playerIds;

    public SessionStorage(int[] playerIds)
    {
      this.playerIds = playerIds;
    }

    public SessionItem GetItem(string key, int playerId)
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
        Add(key, new SessionItem(value));
    }

    public bool TryRemoveItem(string key)
    {
      bool removeItem = true;
      if (ContainsKey(key))
      {
        SessionItem item = this[key];
        for (int i = 0; i < playerIds.Length; i++)
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

    public void RemovePlayer(int playerId)
    {
      playerIds = playerIds.Where(p => p != playerId).ToArray();
    }
  }
}
