using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.FrontModels
{
  public class FrontChatData
  {
    public int ChatId { get; set; }
    public ChatData Data { get; set; }
  }
}
