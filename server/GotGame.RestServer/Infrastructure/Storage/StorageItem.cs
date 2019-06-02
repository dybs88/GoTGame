using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Storage
{
  public class SessionItem
  {
    public string Value { get; set; }
    public IList<int> ReadedBy { get; set; }

    public SessionItem(string value)
    {
      Value = value;
      ReadedBy = new List<int>();
    }

    public bool IsReadedByPlayerId(int playerId)
    {
      return ReadedBy.Any(i => i == playerId);
    }

    public void MarkAsReadedByPlayerId(int playerId)
    {
      if(!ReadedBy.Contains(playerId))
        ReadedBy.Add(playerId);
    }
  }
}
