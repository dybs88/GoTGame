using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Chat
{
  public class ChatPlayer : ICloneable
  {
    public int PlayerId { get; set; }
    public bool IsNew { get; set; }

    public ChatPlayer(int playerId, bool isNew = true)
    {
      PlayerId = playerId;
      IsNew = isNew;
    }

    public void MarkOld()
    {
      IsNew = false;
    }

    public object Clone()
    {
      return new ChatPlayer(this.PlayerId, this.IsNew);
    }
  }

  public static class ChatPlayerListExtensions
  {
    public static IList<ChatPlayer> Clone(this IList<ChatPlayer> list)
    {
      List<ChatPlayer> result = new List<ChatPlayer>();
      foreach(ChatPlayer cp in list)
      {
        result.Add((ChatPlayer)cp.Clone());
      }

      return result;
    }
  }
}
