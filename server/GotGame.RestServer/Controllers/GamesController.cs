using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/games")]
  public class GamesController : Controller
  {
    private IGamesRepository gamesRepository;

    public GamesController(IGamesRepository gamesRepository)
    {
      this.gamesRepository = gamesRepository;
    }

    [HttpGet]
    public JsonResult GetGames()
    {
      return new JsonResult(gamesRepository.GetGames());
    }
  }
}
