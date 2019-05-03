using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Consts;
using System;
using Microsoft.AspNetCore.Http;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/players")]
  [ApiController]
  public class PlayerController : Controller
  {
    private IPlayersRepository playerRepository;
    private IChatRepository chatRepository;

    public PlayerController(IPlayersRepository playersRepo, IChatRepository chatRepo)
    {
      playerRepository = playersRepo;
      chatRepository = chatRepo;
    }

    [HttpDelete("delete/{playerId}")]
    public async Task<IActionResult> DeletePlayerAsync(int playerId)
    {
      await playerRepository.DeletePlayerAsync(playerId);
      chatRepository.DeletePlayerChats(playerId);
      return new OkObjectResult(new { playerDeleted = true });
    }

    [HttpGet("{playerId}")]
    public async Task<IActionResult> GetPlayerAsync(int playerId)
    {
      return new OkObjectResult(await playerRepository.GetPlayerAsync(playerId));
    }

    [HttpPost]
    public async Task<IActionResult> UpdatePlayerAsync([FromBody]Player player)
    {
        await playerRepository.SavePlayerAsync(player);
        return new OkObjectResult(player);
    }
  }
}
