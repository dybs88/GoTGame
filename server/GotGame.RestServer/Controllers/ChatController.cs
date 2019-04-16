using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Models;
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
    private IChatRepository chatRepository;

    public ChatController(IChatRepository chatRepo)
    {
      chatRepository = chatRepo;
    }

  
    [HttpPost("create")]
    public IActionResult CreatePrivateChat([FromBody]dynamic frontData)
    {
      int gameId = frontData["gameId"];
      int[] playerIds = frontData["playerIds"].ToObject<int[]>();
      GameChat privateGameChat = chatRepository.CreatePrivateChat(gameId, playerIds);
      return new OkObjectResult(privateGameChat);
    }

    [HttpDelete("delete/{playerId}")]
    public IActionResult DeletePlayerChats(int playerId)
    {
      chatRepository.DeletePlayerChats(playerId);
      return new OkObjectResult(true);
    }

    [HttpGet("getchatdata/{chatId}")]
    public IActionResult GetChatData(int chatId)
    {
      return new OkObjectResult(chatRepository.GetChatById(chatId).ChatDatas);
    }

    [HttpGet("{gameId}")]
    public IActionResult GetGameChats(int gameId)
    {
      return new OkObjectResult(chatRepository.GetChatsByGameId(gameId));
    }

    [HttpPost]
    public IActionResult UpdateChat([FromBody]FrontChatData frontChat)
    {
      return new OkObjectResult(chatRepository.UpdateGameChat(frontChat.ChatId, frontChat.Data));
    }
  }
}
