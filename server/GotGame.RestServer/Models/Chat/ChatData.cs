using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Chat
{
  public class ChatData : ICloneable
  {
    public string PlayerName { get; set; }
    public string Text { get; set; }

    public object Clone()
    {
      return new ChatData { PlayerName = this.PlayerName, Text = this.Text };
    }
  }

  public static class ChatDataListExtensions
  {
    public static IList<ChatData> Clone(this IList<ChatData> list)
    {
      List<ChatData> result = new List<ChatData>();
      foreach(ChatData cd in list)
      {
        result.Add((ChatData)cd.Clone());
      }

      return result;
    }
  }
}
