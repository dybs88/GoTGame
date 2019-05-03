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

    public GameChat(int playerId = 0, ChatPlayer[] chatPlayers = null)
    {
      ChatDatas = new List<ChatData>();
      Players = new List<ChatPlayer>();
      if(chatPlayers != null)
      {
        for (int i = 0; i < chatPlayers.Length; i++)
        {
          Players.Add(chatPlayers[i]);
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
