using GotGame.RestServer.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.FrontModels
{
  public class FrontChatData
  {
    public int GameId { get; set; }
    public ChatData Data { get; set; }
  }
}
