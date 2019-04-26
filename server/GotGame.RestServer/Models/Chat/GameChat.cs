using GotGame.RestServer.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Chat
{
  public class GameChat : ICloneable
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int GameId { get; set; }
    public bool IsPrivate { get; set; }
    public IList<ChatPlayer> Players { get; set; }
    public IList<ChatData> ChatDatas { get; set; }

    public GameChat(int playerId = 0, int[] playerIds = null)
    {
      ChatDatas = new List<ChatData>();
      Players = new List<ChatPlayer>();
      if(playerIds != null)
      {
        for (int i = 0; i < playerIds.Length; i++)
        {
          bool isNew = playerId != playerIds[i];
          Players.Add(new ChatPlayer(playerIds[i], isNew));
        }
      }
    }

    public object Clone()
    {
      GameChat result = new GameChat();

      result.Id = this.Id;
      result.Name = this.Name;
      result.GameId = this.GameId;
      result.IsPrivate = this.IsPrivate;
      result.Players = this.Players.Clone();
      result.ChatDatas = this.ChatDatas.Clone();

      return result;
    }
  }
}
