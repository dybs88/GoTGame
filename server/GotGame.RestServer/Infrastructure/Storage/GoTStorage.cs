using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public interface IGoTStorage
  {
    string GetString(string key);
    void SetString(string key, string value);
  }

  public class GoTStorage : IGoTStorage
  {
    public GoTStorage()
    {
      storage = new Dictionary<string, string>();
    }

    private Dictionary<string, string> storage;

    public string GetString(string key)
    {
      if (storage.ContainsKey(key))
        return storage[key];
      else
        return string.Empty;
    }

    public void SetString(string key, string value)
    {
      if (storage.ContainsKey(key))
        storage[key] = value;
      else
        storage.Add(key, value);
    }
  }
}
