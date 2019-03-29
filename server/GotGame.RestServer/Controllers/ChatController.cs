using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/chat")]
  public class ChatController : Controller
  {
    private static Dictionary<int, List<ChatData>> chatDictionary;

    static ChatController()
    {
      chatDictionary = new Dictionary<int, List<ChatData>>();
    }

    [HttpGet("{gameId}")]
    public IActionResult GetChat(int gameId)
    {
      if (chatDictionary.ContainsKey(gameId))
        return new OkObjectResult(chatDictionary[gameId]);
      else
        return new OkObjectResult(new List<ChatData>());
    }

    [HttpPost]
    public IActionResult UpdateChat([FromBody]FrontChatData frontChat)
    {
      if (chatDictionary.ContainsKey(frontChat.GameId))
        chatDictionary[frontChat.GameId].Add(frontChat.Data);
      else
        chatDictionary.Add(frontChat.GameId, new List<ChatData> { frontChat.Data });

      return new OkObjectResult(chatDictionary[frontChat.GameId]);
    }
  }
}
