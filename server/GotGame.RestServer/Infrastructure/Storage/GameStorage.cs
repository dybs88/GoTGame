using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public class GameStorage : Dictionary<string, string>
  {
    public GameStorage()
    {
      Add(SessionKeys.NewGameCreator, bool.FalseString);
    }

    public string GetString(string key)
    {
      if (ContainsKey(key))
        return this[key];
      else
        return string.Empty;
    }

    public void SetString(string key, string value)
    {
      if (ContainsKey(key))
        this[key] = value;
      else
        Add(key, value);
    }
  }
}
