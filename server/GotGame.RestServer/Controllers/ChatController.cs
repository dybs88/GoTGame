using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models.Chat;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/chat")]
  public class ChatController : Controller
  {
    private IChatRepository chatRepository;
    private IGoTStorage storage;

    public ChatController(IChatRepository chatRepo, IGoTStorage storage)
    {
      chatRepository = chatRepo;
      this.storage = storage;
    }

  
    [HttpPost("create")]
    public async Task<IActionResult> CreatePrivateChat([FromBody]dynamic requestData)
    {
      int gameId = requestData["gameId"];
      int playerId = requestData["playerId"];
      int[] playerIds = requestData["playerIds"].ToObject<int[]>();
      GameChat privateGameChat = await chatRepository.CreatePrivateChat(gameId, playerId, playerIds);
      return new OkObjectResult(new {privateGameChat, privateChatCreated = privateGameChat != null});
    }

    [HttpDelete("delete/{playerId}")]
    public IActionResult DeletePlayerChats(int playerId)
    {
      chatRepository.DeletePlayerChats(playerId);
      return new OkObjectResult(true);
    }

    [HttpGet("getchatdata/{playerId}/{chatId}")]
    public IActionResult GetChatData(int playerId, int chatId)
    {
      dynamic response = new ExpandoObject();
      response.chatDatas = chatRepository.GetChatById(chatId)?.ChatDatas;
      var playerChats = chatRepository.GetPrivateChatsByPlayerId(playerId);
      if(playerChats.Any(gc => gc.Players.Any(cp => cp.PlayerId == playerId && cp.IsNew)))
      {
        response.gameChats = new List<GameChat>();
        foreach(GameChat playerChat in playerChats)
        {
          response.gameChats.Add((GameChat)playerChat.Clone());
        }
      }

      return new OkObjectResult(response);
    }

    [HttpGet("{gameId}")]
    public IActionResult GetGameChats(int gameId)
    {
      return new OkObjectResult(chatRepository.GetChatsByGameId(gameId));
    }

    [HttpPost("mark")]
    public IActionResult MarkAsReaded([FromBody]dynamic requestData)
    {
      int playerId = requestData["playerId"];
      int chatId = requestData["chatId"];
      chatRepository.MarkAsReaded(playerId, chatId);
      return new OkObjectResult(true);
    }

    [HttpPost]
    public IActionResult UpdateChat([FromBody]dynamic requestData)
    {
      int playerId = requestData["playerId"];
      int chatId = requestData["chatId"];
      ChatData data = requestData["data"].ToObject<ChatData>();
      return new OkObjectResult(chatRepository.UpdateGameChat(playerId, chatId, data));
    }
  }
}
