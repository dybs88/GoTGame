using GotGame.RestServer.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class GameChat
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int GameId { get; set; }
    public bool IsPrivate { get; set; }
    public IList<int> Players { get; set; }
    public IList<ChatData> ChatDatas { get; set; }

    public GameChat()
    {
      ChatDatas = new List<ChatData>();
    }
  }
}
